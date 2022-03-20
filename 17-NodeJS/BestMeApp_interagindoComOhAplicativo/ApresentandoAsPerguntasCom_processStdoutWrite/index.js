// process.stdout.write("Alguma coisa.\n")

/**
 * Por debaixo dos panos, o 'console.log' esta usando o 'stdout.write' para escrever.
 */

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
];

const ask = (index = 0) => {
    return process.stdout.write(questions[index] + "\n\t");
}

ask();

    /** Assincrono */
/**
process.stdin.on("data", data => {
    process.stdout.write(data.toString().trim() + "\n\t");
    process.exit();
});
*/

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        // console.log(answers);
        process.exit();
    }
});

process.on("exit", () => {
    console.log(`
        Bacana Kiérico!

        O que você aprendeu hoje foi:
            ${answers[0]}

        O que te aborreceu e você poderia melhorar foi:
            ${answers[1]}

        O que te deixou feliz hoje:
            ${answers[2]}

        Você ajudou ${answers[3]} pessoas hoje!

        Volte amanhã para novas reflexões.
    `);
});