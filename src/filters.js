import numeral from "numeral";

export default {
  dollarfilter(value) {
    if (!value) {
      return "$ 0";
    }
    return numeral(value).format("($ 0.00a)");
  },

  percentFilter(value) {
    if (!value) {
      return "%0";
    }
    return `${Number(value).toFixed(2)}%`
  }
};
