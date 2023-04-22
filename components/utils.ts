import { PlantsData } from "@/pages";
import store from "store";

export function updateCartAmount() {
  const activeUser = store.get("activeUser");
  const allData = store.get("purchaseDb");
  let cartTotalContents = 0;
  try {
    for (let item of allData[activeUser.firstName.toLocaleLowerCase()]) {
      cartTotalContents += item.quantity;
    }
  } catch (error) {
    console.log(error);
  }
  const styleTag = document.querySelector("#cart-update-style");
  if (cartTotalContents === 0) {
    styleTag!.innerHTML = "";
  } else {
    styleTag!.innerHTML =
      "#cart-content::after{" + "content:'" + cartTotalContents + "'}";
  }
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
  updateCartAmount();
}

export function addToCart(data: PlantsData) {
  const allData = store.get("purchaseDb");
  const activeUser = store.get("activeUser");

  if (
    Object.keys(allData).length === 0 ||
    !Object.keys(allData).includes(activeUser.firstName.toLocaleLowerCase())
  ) {
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
            break;
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
      }
    }
  }

  store.set("purchaseDb", allData);
  // console.log(allData);
  updateCartAmount();
}
