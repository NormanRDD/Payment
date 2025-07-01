import { defineStore, storeToRefs } from "pinia";
// import { useAxiosGET } from "../../composables/useAxiosGET";
import { useMainData } from "./mainData";

export const useMainActions = defineStore("mainActions ", () => {
  const { language } = storeToRefs(useMainData());

  const changeLang = (lang) =>{
    language.value = lang
  }

  return {
    changeLang,
  };
});
