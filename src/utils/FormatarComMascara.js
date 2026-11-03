export const MASCARA_NOME = "NOME";
export const MASCARA_CPF = "###.###.###-##";
export const MASCARA_DATA_NASCIMENTO = "##/##/####";
export const MASCARA_TELEFONE = "(##) ####-####";

export const formatarComMascara = (value, mask) => {
  if (!value) return "";

  if (mask === MASCARA_NOME) {
    return value.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ ']/g, "");
  }

  let numericValue = value.replace(/[\D]/g, "");

  if (mask === MASCARA_TELEFONE || mask === "(##) ####-####") {
    mask = numericValue.length > 10 ? "(##) #####-####" : "(##) ####-####";
  }

  if (mask === MASCARA_DATA_NASCIMENTO) {
    let day = numericValue.substring(0, 2);
    let month = numericValue.substring(2, 4);
    let year = numericValue.substring(4, 8);

    if (day.length === 2) {
      let dayNum = parseInt(day, 10);
      if (dayNum > 31) day = "31";
      if (dayNum === 0) day = "01";
    }

    if (month.length === 2) {
      let monthNum = parseInt(month, 10);
      if (monthNum > 12) month = "12";
      if (monthNum === 0) month = "01";
    }

    if (day.length === 2 && month.length === 2) {
      let dayNum = parseInt(day, 10);
      let monthNum = parseInt(month, 10);
      let yearNum = year.length === 4 ? parseInt(year, 10) : 2024;

      let maxDaysInMonth = new Date(yearNum, monthNum, 0).getDate();
      if (dayNum > maxDaysInMonth) {
        day = maxDaysInMonth.toString();
      }
    }

    if (year.length === 4) {
      const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth() + 1;
      const currentDay = today.getDate();

      let yearNum = parseInt(year, 10);
      let monthNum = parseInt(month, 10);
      let dayNum = parseInt(day, 10);

      let isFutureDate = false;

      if (yearNum > currentYear) {
        isFutureDate = true;
      } else if (yearNum === currentYear) {
        if (monthNum > currentMonth) {
          isFutureDate = true;
        } else if (monthNum === currentMonth && dayNum > currentDay) {
          isFutureDate = true;
        }
      }

      if (isFutureDate) {
        day = currentDay.toString().padStart(2, "0");
        month = currentMonth.toString().padStart(2, "0");
        year = currentYear.toString();
      }
    }

    numericValue = day + month + year;
  }

  let maskedValue = "";
  let valueIndex = 0;
  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === "#") {
      maskedValue += numericValue[valueIndex] || "";
      valueIndex++;
    } else {
      maskedValue += mask[i];
    }
    if (valueIndex >= numericValue.length) break;
  }

  return maskedValue;
};
