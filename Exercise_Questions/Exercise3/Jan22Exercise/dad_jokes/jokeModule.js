const dadJokes = [
    { q: "Why do fathers take an extra pair of socks when they go golfing?", a: "In case they get a hole in one!" },
    { q: "I'm reading a book about anti-gravity.", a: "It's impossible to put down!" },
    { q: "Why did the scarecrow win an award?", a: "Because he was outstanding in his field." },
    { q: "What do you call fake spaghetti?", a: "An impasta." }
];


class JokeMachine {
    constructor(jokes = dadJokes) {
        if (Array.isArray(jokes) && jokes.length > 0) {
            this.jokes = jokes;
        } else {
            this.jokes = dadJokes;
        }
        this.currentIndex = -1;
    }

    getNextJoke() {
        const index = Math.floor(Math.random() * this.jokes.length);
        return this.jokes[index];
    }
}

export default JokeMachine;