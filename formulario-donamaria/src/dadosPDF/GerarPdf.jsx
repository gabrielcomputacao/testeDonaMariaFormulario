import pdfMake from "pdfmake/build/pdfmake"
import pdfFont from "pdfmake/build/vfs_fonts"

function GerarPDF(dados){

    pdfMake.vfs = pdfFont.pdfMake.vfs

    const reportTitle = [
        {
            text: 'Formulário Dona Maria',
            fontSize: 15,
            bold: true,
            margin : [15,20,20,45],
           
        }
    ];

   /*  const detail = dados.map((element)=>{
        return [
            {text: element.atividades},
            {text: element.experiencia},

        ]
    }) */ 

    const details = [{
       
       text: `Cargo: ${dados.cargo},\n\nSalário: ${dados.salario}\n\n Atividades:  ${dados.atividades}\n\n Outras Atividades:  ${dados.outrasAtividades}\n\n Experiência:  ${dados.experiencia}\n\n Benefícios:  ${dados.beneficios}\n\n Etapas:  ${dados.etapas} \n\n Habilidades: ${dados.habilidades}\n\n Outras Habilidades Necessárias: ${dados.outrashabilidades}. `

    }];

    const rodape = [
        {
            text: " Criando por Gabriel Henrique",
            fontSize: 15,
            bold: true,
            margin : [15,20,20,45],
        }
    ];

    const docDefinition = {
        pageSize : "A4",
        pageMargins : [15, 50,15,40],

        header:[reportTitle],
        content:[details],
        footer:[rodape]
    }

    pdfMake.createPdf(docDefinition).download("Formulario Dona Maria");

}

export default GerarPDF