const year = document.getElementById("year") as HTMLElement;
const thisYear = new Date().getFullYear().toString();
year?.setAttribute("datetime", thisYear);
year.textContent = thisYear;
