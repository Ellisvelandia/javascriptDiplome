// flags, patterns and quantifiers
const names = ["Pedro", "Sara", "Miriam", "Nestor", "Adrián", "Sandro"];


names.forEach(function(name) {
  const regex = /^(p|s).+(o|a)$/i;

  if (regex.test(name)) {
    console.log(`El nombre ${name} cumple las restricciones.`);
  }
});