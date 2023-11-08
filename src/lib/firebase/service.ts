import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

const retriveData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};

const retriveDataById = async (collectionName: string, id: string) => {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
};

const register = async (data: {
  fullname: string;
  email: string;
  password: string;
  role?: string;
}) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (users.length > 0) {
    return { status: false, statusCode: 400, message: "Email already exists" };
  } else {
    data.role = "member";
    data.password = await bcrypt.hash(data.password, 10);
    try {
      await addDoc(collection(firestore, "users"), data);
      return {
        status: true,
        statusCode: 200,
        message: "Register successfully",
      };
    } catch (error) {
      return { status: false, statusCode: 400, message: "Register failed" };
    }
  }
};

const login = async (data: { email: string }) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (user) {
    return user[0];
  } else {
    return null;
  }
};

const loginWithGoogle = async (data: any, callback: any) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const user: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (user.length > 0) {
    data.role = user[0].role;
    await updateDoc(doc(firestore, "users", user[0].id), data).then(() => {
      callback({
        status: true,
        statusCode: 200,
        message: "Login successfully",
        data: data,
      });
    });
  } else {
    data.role = "member";
    await addDoc(collection(firestore, "users"), data).then(() => {
      callback({
        status: true,
        statusCode: 200,
        message: "Login successfully",
        data: data,
      });
    });
  }
};

export { retriveData, retriveDataById, register, login, loginWithGoogle };
