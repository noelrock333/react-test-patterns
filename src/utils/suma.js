class Suma {
  constructor(value) {
    this.value = value;
  }

  add(value) {
    this.value = this.value + value;
    return this;
  }
}

export default Suma;
