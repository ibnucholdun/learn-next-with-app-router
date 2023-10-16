const getData = async (url: string) => {
  // const res = await fetch("https://fakestoreapi.com/products", {
  //   cache: "no-store",
  // });
  const res = await fetch(url, {
    // cache ini bisa berguna untuk mejaga performance website karena ketika membua websie tidak memfetch ulang melainkan mengambil datanya dari cache
    cache: "no-store",
    next: {
      tags: ["products"], //tag ini untuk menambahkan cache secara manual melalui enpoint api
      // revalidate: 60, //waktu yang digunakan untuk mengupdate data cache untuk satu hari waktunya (3600*24)
    },
  });

  if (!res.ok) {
    throw new Error("Something went wrong data");
  }
  const data = await res.json();
  return data;
};

export default getData;
