import { PlantsData } from "@/pages";
import store from "store";

export function updateCartAmount() {
  const styleTag = document.querySelector("#cart-update-style");
  styleTag!.innerHTML = "#cart-content::after{" + "content:'" + 1 + "'}";
}

export function addDefaultDbDatas() {
  if (!store.get("userCredentials")) {
    store.set("userCredentials", []);
  }
  if (!store.get("activeUser")) {
    store.set("activeUser", {});
  }
  if (!store.get("purchaseDb")) {
    store.set("purchaseDb", {});
  }
  if (!store.get("isLoggedIn")) {
    store.set("isLoggedIn", false);
  }
}

export function addToCart(data: PlantsData) {
  const allData = store.get("purchaseDb");
  const activeUser = store.get("activeUser");

  if (Object.keys(allData).length === 0) {
    allData[activeUser.firstName.toLocaleLowerCase()] = [
      {
        ...data,
        quantity: 1,
      },
    ];
  } else {
    for (let key in allData) {
      if (key === activeUser.firstName.toLocaleLowerCase()) {
        let isNewData = true;
        for (let item of allData[key]) {
          if (item.id === data.id) {
            item.quantity += 1;
            isNewData = false;
          } else {
            isNewData = true;
          }
        }
        if (isNewData) {
          allData[key].push({
            ...data,
            quantity: 1,
          });
        }
      } else {
        allData[activeUser.firstName.toLocaleLowerCase()] = [
          {
            ...data,
            quantity: 1,
          },
        ];
      }
    }
  }

  store.set("purchaseDb", allData);
  console.log(allData);
}
