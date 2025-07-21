let form = document.querySelector('form')

let taskInp = document.querySelector('#task')
let date = document.querySelector('#date')
let checkbox = document.querySelector('#checkbox')

let taskList = document.querySelector('.taskList')

let filter = document.querySelector('#filter')

let allTask = []

function addTaskInArray() {

    allTask.push(
        {
            taskInp: taskInp.value,
            status: checkbox.checked ? "Completed" : "Pending",
            date: date.value
        }
    )

    return 'completed'

}

function renderAllTask() {

    taskList.innerHTML = ''

    allTask.forEach((e) => {

        let taskDiv = document.createElement('div')
        taskDiv.classList.add('task')

        let h1 = document.createElement('h1')
        h1.textContent = e.taskInp
        let isCompleted = document.createElement('p')
        isCompleted.textContent = e.status
        let date = document.createElement('p')
        date.textContent = e.date

        taskDiv.append(h1, isCompleted, date)

        taskList.append(taskDiv)
    })
}

function filterPastTask(today){

     let filteredPastData = allTask.filter(e => today > new Date(`${e.date}`))

        taskList.innerHTML = ''

        filteredPastData.forEach((e) => {

            let taskDiv = document.createElement('div')
            taskDiv.classList.add('task')

            let h1 = document.createElement('h1')
            h1.textContent = e.taskInp
            let isCompleted = document.createElement('p')
            isCompleted.textContent = e.status
            let date = document.createElement('p')
            date.textContent = e.date

            taskDiv.append(h1, isCompleted, date)

            taskList.append(taskDiv)
        })
}

function filterUpcommingTask(today){

     let filteredPastData = allTask.filter(e => today <= new Date(`${e.date}`))

        taskList.innerHTML = ''

        filteredPastData.forEach((e) => {

            let taskDiv = document.createElement('div')
            taskDiv.classList.add('task')

            let h1 = document.createElement('h1')
            h1.textContent = e.taskInp
            let isCompleted = document.createElement('p')
            isCompleted.textContent = e.status
            let date = document.createElement('p')
            date.textContent = e.date

            taskDiv.append(h1, isCompleted, date)

            taskList.append(taskDiv)
        })
}

filter.addEventListener('change', (dets) => {

    let todayDate = new Date()

    if (filter.value == 'all') renderAllTask()
    if (filter.value == 'past') filterPastTask(todayDate)
    if (filter.value == 'upcomming') filterUpcommingTask(todayDate)
})

form.addEventListener('submit', (dets) => {
    dets.preventDefault()
    addTaskInArray()
    renderAllTask()

})