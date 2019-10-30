let money = prompt('Ваш бюджет на месяц?',);

let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: false,
};

let exps1,exps2;
for (let i=0;i<2; i=i+1)
{exps1= prompt("Введите обязательную статью расходов в этом месяце","");
exps2= prompt("Во сколько обойдется?","");}

alert(`${exps1}:${exps2}`);

appData.budgetDay = Math.floor (appData.budget / 30);
alert(`Бюджет на день ${appData.budgetDay}`)