<script setup>
import { shallowRef, ref, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

const formData = reactive({
  cardNumber: "",
  cardHolder: "",
  expirationDate: "",
  cvv: "",
});
const isValid = ref(false);
const isFormExist = ref(false);
const MIN_CARD_NUMBER_LENGTH = 16;

const validationRules = {
  cardNumber: {
    required,
    minLength: minLength(MIN_CARD_NUMBER_LENGTH),
    maxLength: maxLength(16),
  },
  cardHolder: { required },
  expirationDate: {
    required,
    minLength: minLength(4),
    maxLength: maxLength(4),
  },
  cvv: { required, minLength: minLength(3), maxLength: maxLength(3) },
};

const v$ = useVuelidate(validationRules, formData);

const validateForm = () => {
  v$.value.$touch();
  isValid.value = v$.value.$pending ? false : v$.value.$error;
};
const submitForm = () => {
  v$.value.$touch();

  if (!v$.value.$pending && !v$.value.$error) {
    // Form is valid, you can submit data
    console.log("Form submitted:", formData);
    alert("Form submitted!");
  } else {
    console.error("Form is not valid. Please check your inputs.");
    alert("Form is not valid. Please check your inputs.");
  }
};
const myTemplate = `
<div class="formWrapper">

    <h1> Enter the card information</h1>
    <form @submit.prevent="$emit('submitForm')">
    <div class="form-group">
      <label for="cardNumber">Card Number:</label>
      <input type="text" id="cardNumber" v-model="formData.cardNumber" @input="$emit('validateForm')" />
       <span>{{ v.cardNumber?.$pending ? 'Validating...' : v.cardNumber?.$error ? 'Invalid Card Number' : '' }}</span>
    </div>

    <div class="form-group">
      <label for="cardHolder">Card Holder:</label>
      <input type="text" id="cardHolder" v-model="formData.cardHolder" @input="$emit('validateForm')" />
       <span>{{ v.cardHolder?.$pending ? 'Validating...' : v.cardHolder?.$error ? 'Invalid Card Holder' : '' }}</span>
    </div>

    <div class="form-group">
      <label for="expirationDate">Expiration Date:</label>
      <input type="text" id="expirationDate" placeholder="MM/YY" v-model="formData.expirationDate" @input="$emit('validateForm')" />
         <span>{{ v.expirationDate?.$pending ? 'Validating...' : v.expirationDate?.$error ? 'Invalid Expiration Date' : '' }}</span>
    </div>

    <div class="form-group">
      <label for="cvv">CVV:</label>
      <input type="text" id="cvv" v-model="formData.cvv" @input="$emit('validateForm')" />
       <span>{{ v.cvv?.$pending ? 'Validating...' : v.cvv?.$error ? 'Invalid CVV' : '' }}</span>
    </div>

    <button :disabled="v.$pending || v.$error">Submit</button>
    </form>

  </div>
`.trim();

const data = shallowRef({
  template: myTemplate,
  props: ["isValid", "v", "formData"],
  emits: ["submitForm"],
});
onMounted(() => {
  if (myTemplate.value !== "") {
    isFormExist.value = true;
  }
});
</script>

<template>
  <div v-if="isFormExist">
    <component
      :is="data"
      :v="v$"
      :isValid="isValid"
      :formData="formData"
      @validateForm="validateForm"
      @submitForm="submitForm"
    />
  </div>
</template>
<style>
.form-group {
  width: 100%;
  max-width: 400px;
  margin: 20px 0;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.formWrapper {
  text-align: left;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  border: 1px solid black;
  background-color: rgba(137, 43, 226, 0.445);
  padding: 10px;
  width: 100%;
  max-width: 600px;
}
</style>
