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
    store.set("purchaseDb", []);
  }
  if (!store.get("isLoggedIn")) {
    store.set("isLoggedIn", false);
  }
}

export function addToCart(data: PlantsData) {
  const allData = store.get("purchaseDb");
  const activeUser = store.get("activeUser");
  console.log(data, activeUser);
}
