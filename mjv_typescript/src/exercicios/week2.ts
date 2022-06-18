// 1- Crie um tipo para representar um objeto que contenha as suas informações de nome, profissão, idade e uma lista de assuntos de seu interesse
interface Pessoa {
    nome: string,
    profissao: string,
    idade: number,
    interessesMusicais: string[]
}

// 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
const pessoa: Pessoa = {
    nome: "Rita de Cássia",
    profissao: "Desenvolvedora de Software",
    idade: 23,
    interessesMusicais: [ 
                            "Vintage Culture",
                            "Victor Lou",
                            "Illusionize",
                            "Vegas",
                            "Almanac"
                        ]
}

// 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, e retorne somente a lista de assuntos do objeto.
function listarInteresses(pessoa: Pessoa) {
    return pessoa.interessesMusicais.map
}
console.log(pessoa.interessesMusicais.map)

// 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
function listarInteressesType(pessoa: Pessoa) : string[] {
    return pessoa.interessesMusicais
}

// 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
enum Curso {
    Angular = "1",
    Typescript = "2",
    Git = "3",
}

// 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
interface Professor {
    nome: string,
    cursos: Curso[]
}

// 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. Nathan = Angular e Git, Alan = Angular, Typescript e Git
const Alan: Professor = {
    nome: "Alan",
    cursos: [
        Curso.Angular,
        Curso.Typescript,
        Curso.Git,
    ]
}

const Nathan: Professor = {
    nome: "Nathan",
    cursos: [
        Curso.Angular,
        Curso.Git
    ]

}

// 8 - Declare e popule um array com os objetos do exercício 7.
const professores: Professor[] = [Alan, Nathan]

// 9 - Faça uma função que receba um argumento de array de Professor e retorne um novo array de strings contendo somente os nomes dos professores.
const professorNomes = (professor: Professor[]) : string[] => {
    return professores.map(professor => professor.nome)
}

// 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
const cursosDosProfessores = (professor: Professor[]): Curso[] => {
    return professor.reduce<Curso[]>((cursos, professor) => {
        return cursos.concat(professor.cursos);
    }, [])
}
// concat = combina um array com outro

// 11 - Faça uma função que receba um argumento de array de Professores e retorne o primeiro Professor encontrado que dê aula de Typescript.
const professorTypescript = (professor: Professor[]) => {
    return professores.find(professor => professor.cursos.includes(Curso.Typescript))
}

