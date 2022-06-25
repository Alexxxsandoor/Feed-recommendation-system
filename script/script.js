//юзеры
var user = [
	{
		name: "user1",
		login: "1",
		password: "1",
		email: "user1@gmail.com",
		money: Number(2000 + getRandomInt(900) + getRandomInt(2000) + getRandomInt(5000)),
	},
	{
		name: "user2",
		login: "2",
		password: "2",
		email: "user2@gmail.com",
		money: 10000000,
	},
]
var userID = 0
//список всех известных животных и что они едят
var animal = [
	{
		id: 0,
		nameUkr: "Курка",
		food: 50,
	},
	{
		id: 1,
		nameUkr: "Свиня",
		food: 400,
	},
	{
		id: 2,
		nameUkr: "Корова",
		food: 350,
	},
	{
		id: 3,
		nameUkr: "Вівця",
		food: 200,
	},
	{
		id: 4,
		nameUkr: "Кролик",
		food: 60,
	},
	{
		id: 5,
		nameUkr: "Качка",
		food: 70,
	},
	{
		id: 6,
		nameUkr: "Індик",
		food: 80,
	},
]

//Цена чужих кормов
const priseListOtherCompanies = [
	{
		nameCompanies: "Компанія 1",
		priceList: [

			{
				foodName: "Корм для корови",
				animal: "Корова",
				price: 40.12,
				amount: 5000,
			},
			{
				foodName: "Гарна вівця №12",
				animal: "Вівця",
				price: 36.33,
				amount: 3000,
			},
			{
				foodName: "Індик 100кг №7",
				animal: "Індик",
				price: 34.18,
				amount: 5000,
			},
			{
				foodName: "Свиня як корова",
				animal: "Свиня",
				price: 37.99,
				amount: 1300,
			},
		]
	},
	{
		nameCompanies: "Компанія 2",
		priceList: [
			{
				foodName: "ТОВ великдень",
				animal: "Індик",
				price: 30.44,
				amount: 2000,
			},
			{
				foodName: "Швидкий кролик",
				animal: "Кролик",
				price: 24.56,
				amount: 10000,
			},
			{
				foodName: "Біла Качка №5",
				animal: "Качка",
				price: 36.14,
				amount: 1000,
			},
		]
	},
	{
		nameCompanies: "Компанія 3",
		priceList: [
			{
				foodName: "ТОВ великдень",
				animal: "Свиня",
				price: 44.44,
				amount: 20000,
			},
			{
				foodName: "Золота курка",
				animal: "Курка",
				price: 22.12,
				amount: 40000,
			},
		]
	},
	{
		nameCompanies: "Компанія 4",
		priceList: [
			{
				foodName: "ТОВ великдень",
				animal: "Вівця",
				price: 40.44,
				amount: 10000,
			}, {
				foodName: "Корм для корови",
				animal: "Корова",
				price: 42.12,
				amount: 50000,
			},
			{
				foodName: "Великий індик",
				animal: "Індик",
				price: 33.3,
				amount: 60000,
			},
		]
	},


]

//Цена наших кормов
const priseListCompanies = [
	{
		nameCompanies: "Наша компанія",
		priceList: [
			{
				foodName: "Великий індик",
				animal: "Індик",
				price: 26.30,
				amount: 300,
			},
			{
				foodName: "Індик №123",
				animal: "Індик",
				price: 23.3,
				amount: 600,
			},
			{
				foodName: "Свиня 2000",
				animal: "Свиня",
				price: 30.57,
				amount: 1000,
			},
			{
				foodName: "Золота курка",
				animal: "Курка",
				price: 16.42,
				amount: 400,
			},
			{
				foodName: "Коровка МУ",
				animal: "Корова",
				price: 31.13,
				amount: 1000,
			},
		]
	}

]

//Поля которые получаем от юзера когда тот выбирает нужные значения по виду животного и по его колчиеству, ну и время или деньги
var infoForAlg

//История поиска
var historyInfoForAlg = []

const root = document.querySelector("#root")

//блок для ввода юзером информации
function loginDiv() {
	const regDiv = document.querySelector(".regDiv")
	if (regDiv) regDiv.remove()

	const loginDiv = document.createElement("div")
	loginDiv.className = "loginDiv"

	const loginInput = document.createElement("input")
	loginInput.setAttribute("placeholder", "Логін")
	loginInput.className = "login"
	loginInput.setAttribute("type", "login")

	const passwordInput = document.createElement("input")
	passwordInput.setAttribute("placeholder", "Пароль")
	passwordInput.className = "password"
	passwordInput.setAttribute("type", "password")

	const loginButton = document.createElement("button")
	loginButton.setAttribute("onclick", "login()")
	loginButton.innerHTML = "Увійти"

	const regButton = document.createElement("button")
	regButton.setAttribute("onclick", "regDiv()")
	regButton.innerHTML = "Реєстрація"


	loginDiv.append(loginInput)
	loginDiv.append(passwordInput)

	loginDiv.append(loginButton)
	loginDiv.append(regButton)


	root.append(loginDiv)
}

//блок проверки логина
function login() {

	const login = document.querySelector(".login").value
	const password = document.querySelector(".password").value
	const loginDiv = document.querySelector(".loginDiv")

	for (let i = 0; i < user.length; i++) {
		if (user[i].login == login && user[i].password == password) {
			userID = i;
			loginDiv.remove()
			divInfoUser(userID)

			buttonFun()
			priceListsOtherDiv()
			priceListsMyDiv()

		}
	}
}

//блок создания блока для реестрации
function regDiv() {
	const loginDivDel = document.querySelector(".loginDiv")
	loginDivDel.remove()

	const regDiv = document.createElement("div")
	regDiv.className = "regDiv"

	const nameInput = document.createElement("input")
	nameInput.setAttribute("placeholder", "Ім'я")
	nameInput.className = "name"

	const emailInput = document.createElement("input")
	emailInput.setAttribute("placeholder", "email")
	emailInput.className = "email"
	emailInput.setAttribute("type", "email")

	const loginInput = document.createElement("input")
	loginInput.setAttribute("placeholder", "Логін")
	loginInput.className = "login"
	loginInput.setAttribute("type", "login")

	const passwordInput = document.createElement("input")
	passwordInput.setAttribute("placeholder", "Пароль")
	passwordInput.className = "password"
	passwordInput.setAttribute("type", "password")



	const regButton = document.createElement("button")
	regButton.setAttribute("onclick", "reg()")
	regButton.innerHTML = "Зареєструватися"

	const closeButton = document.createElement("button")
	closeButton.setAttribute("onclick", "loginDiv()")
	closeButton.innerHTML = "Закрити"

	regDiv.append(loginInput)
	regDiv.append(nameInput)
	regDiv.append(emailInput)
	regDiv.append(passwordInput)


	regDiv.append(regButton)
	regDiv.append(closeButton)


	root.append(regDiv)

}

//блок реестрации и добавления новых юзеров
function reg() {
	const name = document.querySelector(".name").value
	const email = document.querySelector(".email").value
	const login = document.querySelector(".login").value
	const password = document.querySelector(".password").value

	if (name && email && login && password)
		for (let i = 0; i < user.length; i++) {
			if (user[i].login == login) alert("Такий вже логін існує")
			else {
				user[user.length] = {
					name: name,
					login: login,
					password: password,
					email: email,
					money: Number(4000 + getRandomInt(1000) + getRandomInt(5000) + getRandomInt(5000))
				}

				loginDiv()
				break;
			}
		}
	else alert("Введіть всі поля")

}

//рандомайзер
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

//блок создавания юзер инфы на странице справа сверху
function divInfoUser(idUser) {
	const userBlock = document.createElement("div")
	userBlock.className = "userBlock"

	userBlock.innerHTML = `<p><b>Ім'я:</b> ${user[idUser].name}</p>
	<p><b>Логін:</b> ${user[idUser].login}</p>
	<p><b>Email:</b> ${user[idUser].email}</p>
	<p><b>Гроші:</b> ${user[idUser].money} грн</p>`

	root.append(userBlock)
}

//блок чужих прейскурантов
function priceListsOtherDiv() {
	const priseListDiv = document.querySelector("#prise-list")

	const companiesDivSearch = document.querySelector(".companiesDiv")
	if (companiesDivSearch) companiesDiv.remove()

	const companiesDiv = document.createElement("div")
	companiesDiv.className = "companiesDiv"
	companiesDiv.innerHTML = `<h3>Комбікорм іншого виробництва</h3>`


	for (let i = 0; i < priseListOtherCompanies.length; i++) {

		const companiesNo = document.createElement("div")
		companiesNo.className = "companiesNo"
		companiesNo.innerHTML = `<h3><b>${priseListOtherCompanies[i].nameCompanies}</b></h3>
		<br/>
		<p class="table"><b>№</b><b>Назва<br/>корму:</b><b>Вид<br/>тварини:</b><b>Кількість:</b><b>Ціна:</b></p>`

		for (let j = 0; j < priseListOtherCompanies[i].priceList.length; j++) {

			const product = document.createElement("div")
			product.className = "product"
			product.innerHTML = `
			${j + 1}.
			<p>${priseListOtherCompanies[i].priceList[j].foodName}</p>
			<p><b>${priseListOtherCompanies[i].priceList[j].animal}</b></p> 
			<p>${priseListOtherCompanies[i].priceList[j].amount} кг</p> 
			<p>${priseListOtherCompanies[i].priceList[j].price} грн/кг</p>`

			companiesNo.append(product)
		}

		companiesDiv.append(companiesNo)
	}

	priseListDiv.append(companiesDiv)
}

//блок наших прейскурантов
function priceListsMyDiv() {
	const priseListDiv = document.querySelector("#type-of-feed")

	const companiesDivSearch = document.querySelector(".myCompaniesDiv")
	if (companiesDivSearch) companiesDiv.remove()

	const companiesDiv = document.createElement("div")
	companiesDiv.className = "myCompaniesDiv"
	companiesDiv.innerHTML = `<h3>Комбікорм власного виробництва</h3>`


	for (let i = 0; i < priseListCompanies.length; i++) {

		const companiesNo = document.createElement("div")
		companiesNo.className = "companiesNo"
		companiesNo.innerHTML = `<h3>${priseListCompanies[i].nameCompanies}</h3>
		<br/>
		<p class="table"><b>№</b><b>Назва<br/>корму:</b><b>Вид<br/>тварини:</b><b>Кількість:</b><b>Ціна:</b></p>`

		for (let j = 0; j < priseListCompanies[i].priceList.length; j++) {

			const product = document.createElement("div")
			product.className = "product"
			product.innerHTML = `
			${j + 1}.
			<p>${priseListCompanies[i].priceList[j].foodName}</p>
			<p><b>${priseListCompanies[i].priceList[j].animal}</b></p> 
			<p>${priseListCompanies[i].priceList[j].amount} кг</p> 
			<p>${priseListCompanies[i].priceList[j].price} грн/кг</p>`

			companiesNo.append(product)
		}

		companiesDiv.append(companiesNo)
	}

	priseListDiv.append(companiesDiv)
}

//кнопки
function buttonFun() {

	const buttonDiv = document.querySelector("#func-button")

	const buttonAlg = document.createElement("button")
	buttonAlg.className = "buttonAlg"
	buttonAlg.setAttribute("onclick", "algDiv()")
	buttonAlg.innerHTML = "Розрахунок майбутьного поголів'я"

	const buttonHistory = document.createElement("button")
	buttonHistory.className = "buttonAlg"
	buttonHistory.setAttribute("onclick", "historyDiv()")
	buttonHistory.innerHTML = "Історія пошуку"


	buttonDiv.append(buttonAlg)
	buttonDiv.append(buttonHistory)

}

//отображение поля для ввода информации по сортировке
function algDiv() {

	const algDivSearch = document.querySelector(".algDiv")
	if (algDivSearch) algDivSearch.remove()

	const algDiv = document.createElement("div")
	algDiv.className = "algDiv"

	const amountInput = document.createElement("input")
	amountInput.setAttribute("type", "number")
	amountInput.setAttribute("placeholder", "Кількість майбутніх пологів")
	amountInput.className = "amount"

	const animalInput = document.createElement("input")
	animalInput.setAttribute("placeholder", "Вид тварини")
	animalInput.className = "animal"

	const search = document.createElement("button")
	search.innerHTML = "Старт"
	search.setAttribute("onclick", "tageInfoForAlg()")

	const close = document.createElement("button")
	close.innerHTML = "Закрити вікно"
	close.setAttribute("onclick", "closeWindAlg()")


	// const divInputTimeMoney = document.createElement("div")
	// divInputTimeMoney.className = "divInputTimeMoney"


	// const paragrafTime = document.createElement("p")
	// const timeInput = document.createElement("input")
	// timeInput.setAttribute("type", "radio")
	// timeInput.setAttribute("name", "time")
	// timeInput.setAttribute("id", "time")

	// const timeLabel = document.createElement("label")
	// timeLabel.setAttribute("for", "time")
	// timeLabel.innerHTML = "Час"


	// const paragrafMoney = document.createElement("p")
	// const moneyInput = document.createElement("input")
	// moneyInput.setAttribute("type", "radio")
	// moneyInput.setAttribute("name", "money")
	// moneyInput.setAttribute("id", "money")

	// const moneyLabel = document.createElement("label")
	// moneyLabel.setAttribute("for", "money")
	// moneyLabel.innerHTML = "Гроші"

	// paragrafTime.append(timeInput)
	// paragrafTime.append(timeLabel)
	// paragrafMoney.append(moneyInput)
	// paragrafMoney.append(moneyLabel)

	// divInputTimeMoney.append(paragrafTime)
	// divInputTimeMoney.append(paragrafMoney)



	algDiv.append(amountInput)
	algDiv.append(animalInput)

	// algDiv.append(divInputTimeMoney)

	algDiv.append(search)
	algDiv.append(close)

	root.append(algDiv)

}

//закрытие окошка с вводом информации
function closeWindAlg() {
	const algDivSearch = document.querySelector(".algDiv")
	if (algDivSearch) algDivSearch.remove()
}

//получение инфы от юзера по чем искать
function tageInfoForAlg(type, an, am) {
	var animal
	var amount
	if (type == "history") {
		infoForAlg = {
			animal: an,
			amount: Number(am),
			timeUser: new Date()
		}
		closeWindAlg()
		closeDivMyPriseList()
		algoritm(infoForAlg)
	} else {
		amount = Number(document.querySelector(".amount").value)
		animal = document.querySelector(".animal").value

		// const time = document.querySelector("#time")
		// const money = document.querySelector("#money")


		if (amount && animal) {

			// if (time.checked) {
			infoForAlg = {
				animal: animal,
				amount: amount,
				// time: 1,
				// money: 0,
				timeUser: new Date()
			}
			// }
			// else if (money.checked) {
			// 	infoForAlg = {
			// 		animal: animal,
			// 		amount: amount,
			// 		time: 0,
			// 		money: 1,
			// 		timeUser: new Date()
			// 	}
			// }
			// else {
			// 	infoForAlg = {
			// 		animal: animal,
			// 		amount: amount,
			// 		time: 0,
			// 		money: 0,
			// 		timeUser: new Date()
			// 	}
			// }

			closeWindAlg()
			closeDivMyPriseList()
			algoritm(infoForAlg)

			historyInfoForAlg[historyInfoForAlg.length] = infoForAlg



		}
		else alert("Введіть всі данні про тварин та їх кількість")
	}






}

//Получение истории поиска
function historyDiv() {

	const historyListSearch = document.querySelector(".historyList")
	if (historyListSearch) historyListSearch.remove()

	const historyList = document.createElement("div")
	historyList.className = "historyList"


	if (historyInfoForAlg.length == 0) {
		historyList.innerHTML = "<b>Історія пошуку пуста!</b>"

		setTimeout(() => {
			const historyListSearch = document.querySelector(".historyList")
			historyListSearch.remove()
		}, 4000);
	}
	else {
		for (let i = 0; i < historyInfoForAlg.length; i++) {
			const infoDiv = document.createElement("div")
			infoDiv.className = "infoDiv"
			infoDiv.innerHTML = `<h4>${i + 1}. ${historyInfoForAlg[i].timeUser}</h4>`

			const pAnimal = document.createElement("p")
			pAnimal.innerHTML = `Назва тварини: ${historyInfoForAlg[i].animal}`

			const pAmount = document.createElement("p")
			pAmount.innerHTML = `Кількість: ${historyInfoForAlg[i].amount}`

			// const TimeOrMoney = document.createElement("p")


			// if (historyInfoForAlg[i].money == 1) TimeOrMoney.innerHTML = `<b>Обмеження по ціні!</b>`
			// else if (historyInfoForAlg[i].time == 1) TimeOrMoney.innerHTML = `<b>Обмеження по часу!</b>`
			// else TimeOrMoney.innerHTML = `<b>Без обмежень</b>`

			infoDiv.append(pAnimal)
			infoDiv.append(pAmount)
			// infoDiv.append(TimeOrMoney)

			const button = document.createElement("button")
			button.style.marginTop = "20px"
			button.innerHTML = "Повторити запит"
			button.setAttribute("onclick", `tageInfoForAlg('history', "${historyInfoForAlg[i].animal}","${historyInfoForAlg[i].amount}")`)


			infoDiv.append(button)


			historyList.append(infoDiv)

		}
		const buttonCloseHistory = document.createElement("button")
		buttonCloseHistory.setAttribute("onclick", "closeHistory()")
		buttonCloseHistory.innerHTML = "Закрити історію"
		historyList.append(buttonCloseHistory)
	}





	root.append(historyList)

}

//закрыть окно с историей
function closeHistory() {
	const historyListSearch = document.querySelector(".historyList")
	if (historyListSearch) historyListSearch.remove()
}

//проверка есть ли у нашей компании
function algoritm(info) {



	for (let i = 0; i < priseListCompanies[0].priceList.length; i++) {
		//есть ли в нашей компании это животное
		if (info.animal == priseListCompanies[0].priceList[i].animal) {
			foodList(priseListCompanies[0].priceList, info, "my")
			break
		}
		else if (i == priseListCompanies[0].priceList.length - 1) {
			searchOtherCompaines(info)
		}

	}

}

//проверка есть ли у других компаний
function searchOtherCompaines(info) {

	var allPrice = []
	for (let i = 0; i < priseListOtherCompanies.length; i++) {

		//создаем список со всеми другими компаниями для такого животного
		for (let j = 0; j < priseListOtherCompanies[i].priceList.length; j++) {

			allPrice[allPrice.length] = {
				nameCompanies: priseListOtherCompanies[i].nameCompanies, ...priseListOtherCompanies[i].priceList[j]
			}

		}

	}

	for (let i = 0; i < allPrice.length; i++) {
		if (info.animal == allPrice[i].animal) {
			foodList(allPrice, info, "other")
			break
		}
		else if (i == allPrice.length - 1) {
			alert("В нашій системі не існує корму для такої тварини")
		}
	}


}

//сортировка списка продуктов
function foodList(arr, userInfo, type) {

	var newListArr = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].animal == userInfo.animal) {
			newListArr[newListArr.length] = arr[i]
		}
	}

	newListArr.sort((a, b) => a.price - b.price)

	amountFood(newListArr, userInfo, type)


}

// проверка хватит ли у нас вообще такого количества
function amountFood(newListArr, userInfo, type) {

	var amountAnimalFoor

	for (let i = 0; i < animal.length; i++) {
		if (animal[i].nameUkr == userInfo.animal) {
			amountAnimalFoor = userInfo.amount * animal[i].food
			break
		}
	}
	if (type == "my") {
		for (let i = 0; i < newListArr.length; i++) {
			if (newListArr[i].amount >= amountAnimalFoor) {
				searchAmountWhoCan(newListArr, type, amountAnimalFoor, userInfo.animal, userInfo.amount)

				break
			} else {
				searchAmountWhoCan(newListArr, "thereIsButLittle", amountAnimalFoor, userInfo.animal, userInfo.amount, false)
				searchOtherCompaines(userInfo)
				break
			}
		}
	} else {

		for (let i = 0; i < newListArr.length; i++) {
			if (newListArr[i].amount >= amountAnimalFoor) {
				searchAmountWhoCan(newListArr, type, amountAnimalFoor, userInfo.animal, userInfo.amount)
				break
			}
			else if (i == newListArr.length - 1) {
				alert(`Ні в нашій, ні в інших компаніях не має такої кількості кормів! Необхідно: ${amountAnimalFoor} кг для ${userInfo.animal}`)

				for (let k = 0; k < newListArr.length; k++) {
					if (newListArr[k].amount < amountAnimalFoor) {
						searchAmountWhoCan(newListArr, type, amountAnimalFoor, userInfo.animal, userInfo.amount, "typeOverAmount")
						break
					}
				}

				break
			}
		}
	}

}

// оставляем список той компании и того продукта которой хватит для нас корма
function searchAmountWhoCan(arr, type, amountAnimalFoor, animal, amount, typeOverAmount) {
	var newFinalArr = []

	if (typeOverAmount == "typeOverAmount") {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].amount < amountAnimalFoor) {
				newFinalArr[newFinalArr.length] = arr[i]
			}
		}
		divNewListPrice(newFinalArr, type, amountAnimalFoor, animal, amount, typeOverAmount)
	}
	else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].amount >= amountAnimalFoor) {
				newFinalArr[newFinalArr.length] = arr[i]
			}
		}
		if (type == "thereIsButLittle") {
			divThereIsButLittle(newFinalArr, amountAnimalFoor, animal, amount)
		}
		else divNewListPrice(newFinalArr, type, amountAnimalFoor, animal, amount)
	}
}

//главноый список с прейскурантами 
function divNewListPrice(arr, type, amountAnimalFoor, animal, amount, typeOverAmount) {
	const priseListDiv = document.querySelector("#new-prise-list")

	const companiesDivSearch = document.querySelector(".listFood")
	if (companiesDivSearch) companiesDivSearch.remove()

	const companiesDiv = document.createElement("div")
	companiesDiv.className = "listFood"
	companiesDiv.innerHTML = `<p>Необхідний корм для користувача в кількості: <b>${amountAnimalFoor}кг</b> для <b>'${animal}' - ${amount} голів</b></p>`

	if (typeOverAmount == "typeOverAmount") {
		var allAmountCanBuy = 0
		var allAmountCanBuyPrice = 0
	}

	for (let i = 0; i < arr.length; i++) {

		const companiesNo = document.createElement("div")
		companiesNo.className = "companiesNo"
		if (type == "other") companiesNo.innerHTML = `<h3><b>${arr[i].nameCompanies}</b></h3>`
		else if (type == "my") companiesNo.innerHTML = "<b><span>НАША КОМПАНІЯ</span></b>"



		const product = document.createElement("div")
		product.className = "product"
		product.innerHTML = `
			${i + 1}.
			<p>${arr[i].foodName}</p>
			<p><b>${arr[i].animal}</b></p> 
			<p>${arr[i].amount} кг</p> 
			<p>${arr[i].price} грн/кг</p>`

		if (typeOverAmount == "typeOverAmount") {
			allAmountCanBuy += arr[i].amount
			allAmountCanBuyPrice += arr[i].amount * arr[i].price
		}

		const cost = document.createElement("div")
		cost.className = "cost"
		if (!typeOverAmount) {
			if (amountAnimalFoor * Number(arr[i].price) > user[userID].money) {
				cost.innerHTML = `Вам буде коштувати: <b>${rounded(amountAnimalFoor * Number(arr[i].price))} грн.</b> у вас не вистачає <b>${rounded(amountAnimalFoor * Number(arr[i].price) - user[userID].money)} грн.</b>`
				cost.style.borderBottomColor = "red"
			}
			else {
				cost.innerHTML = `Вам буде коштувати: <b>${rounded(amountAnimalFoor * Number(arr[i].price))} грн.</b> У вас залишається <b>${rounded(user[userID].money - amountAnimalFoor * Number(arr[i].price))} грн.</b>`
				cost.style.borderBottomColor = "Green"
			}
		}
		else {
			cost.innerHTML = `Вам необхідно скупити весь корм!<br/>
			
			<b>${rounded(arr[i].amount * Number(arr[i].price))} грн.`

		}



		companiesNo.append(product)
		companiesNo.append(cost)


		companiesDiv.append(companiesNo)
	}

	if (typeOverAmount == "typeOverAmount") {
		var divAmountCan = document.createElement("div")
		divAmountCan.className = "divAmountCan"
		divAmountCan.innerHTML = `Всього в інших компаніях є <b>${allAmountCanBuy}</b>кг корму, це буде коштувати <b>${allAmountCanBuyPrice}</b>грн!
		<br/>
		<p>Вам необхідно знайти ще <b>${amountAnimalFoor - allAmountCanBuy}</b>кг корму (Підрахунок без нашого корму)</p>
		`

		priseListDiv.append(divAmountCan)


	}




	priseListDiv.append(companiesDiv)
}

//функций по созданию сообщения про наличие товара у нас
function divThereIsButLittle(arr, amountAnimalFoor, animal, amount) {
	const priseListDiv = document.querySelector("#new-my-prise-list")



	closeDivMyPriseList()


	const list = []

	for (let i = 0; i < priseListCompanies[0].priceList.length; i++) {

		if (priseListCompanies[0].priceList[i].animal == animal) {
			list[list.length] = priseListCompanies[0].priceList[i]
		}
	}
	list.sort((a, b) => a.price - b.price)

	var allAmountFood = 0
	var allPrise = 0



	for (let i = 0; i < list.length; i++) {

		allAmountFood += list[i].amount
		allPrise += (list[i].amount * list[i].price)
	}

	const animalHead = searchAnimal(animal)

	const companiesDiv = document.createElement("div")


	if (allAmountFood <= amountAnimalFoor) {
		companiesDiv.className = "foodMyIs"
		companiesDiv.innerHTML = `<p>У нас є такий корм, але його не вистачає. Необхідно <b>${amountAnimalFoor}кг</b> для <b>'${animal}' - ${amount} голів</b></p><br/>
	<p>У нас э лише: <b>${allAmountFood}</b>кг, не вистачає <b>${amountAnimalFoor - allAmountFood}кг</b>, 
	це хватає лише для <b>${rounded(allAmountFood / animalHead)}</b> голів, 
	можливо взяти в інших компаніях корму для <b>${rounded(amount - (allAmountFood / animalHead))}</b> голів</p>
	<br/>
	<p>Повна ціна за всі корми(${list.length} штук) нашої компанії:<b>${rounded(allPrise)}</b>грн.</p>
	`
	}

	else {
		companiesDiv.className = "amountNotOneFood"
		companiesDiv.innerHTML = `<p>У нас є такий корм, але не можемо віддати тільки 1 вид корму, можемо пропонувати різні види корму</p>
		<br/>
		<p>Необхідно користувачу <b>${amountAnimalFoor}</b>кг для "<b>${animal}</b>" -<b>${amount}</b> голів</p>
		<p>Загалом у нас є <b>${allAmountFood}</b>кг</p>
	`
	}

	for (let i = 0; i < list.length; i++) {

		const companiesNo = document.createElement("div")
		companiesNo.className = "companiesNo"
		companiesNo.innerHTML = `<b>НАША КОМПАНІЯ</b>
		<p>Повна ціна за корм:<b>${rounded(list[i].amount * list[i].price)}</b> грн.</p>`

		const product = document.createElement("div")
		product.className = "product"
		product.innerHTML = `
			${i + 1}.
			<p>${list[i].foodName}</p>
			<p><b>${list[i].animal}</b></p> 
			<p>${list[i].amount} кг</p> 
			<p>${list[i].price} грн/кг</p>
			`

		companiesNo.append(product)



		companiesDiv.append(companiesNo)
	}


	priseListDiv.append(companiesDiv)
}

function searchAnimal(an) {

	var animalFood = 0

	for (let i = 0; i < animal.length; i++) {
		if (animal[i].nameUkr == an) animalFood = animal[i].food
	}

	return animalFood


}

//закрить сообщение о том что в нашей компании есть товар
function closeDivMyPriseList() {
	const foodMyIs = document.querySelector(".foodMyIs")
	if (foodMyIs) foodMyIs.remove()

	const listFood = document.querySelector(".listFood")
	if (listFood) listFood.remove()

	const divAmountCan = document.querySelector(".divAmountCan")
	if (divAmountCan) divAmountCan.remove()


	const amountNotOneFood = document.querySelector(".amountNotOneFood")
	if (amountNotOneFood) amountNotOneFood.remove()

}

//округление
var rounded = function (number) {
	return +number.toFixed(2);
}

//------------------------------------------------------------------------------------------------------------//

loginDiv()

// login()
// priceListsOtherDiv()
// priceListsMyDiv()





