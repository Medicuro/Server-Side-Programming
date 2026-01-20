"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    // load <select> element
    const selectUser = $("#users")

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            const option = document.createElement("option");
            option.value = user.id;
            option.textContent = user.name;
            selectUser.appendChild(option);
        }
    }).catch(e => console.error(e))
    

    // display to-do items for first user in <select> element
    function displayTodos(userId) {
        const todoList = $("#list");
        todoList.textContent = "";

        fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${userId}`)
            .then(response => response.json())
            .then(todos => {
                for (const todo of todos) {
                    const li = document.createElement("li");
                    li.textContent = todo.title;

                    if (todo.completed) {
                        li.classList.add("completed");
                    }

                    todoList.appendChild(li);
                }
            }).catch(e => console.error(e));
    }
    

    // event handler for <select> change event
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            for (const user of users) {
                const option = document.createElement("option");
                option.value = user.id;
                option.textContent = user.name;
                selectUser.appendChild(option);
            }

            // display todos for the first user
            displayTodos(selectUser.value);
        })
        .catch(error => console.error(error));

    // change event for <select>
    selectUser.addEventListener("change", () => {
        displayTodos(selectUser.value);
    });
    
 });