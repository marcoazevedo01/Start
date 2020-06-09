const fs = require('fs');
//const sharp = require('sharp');

exports.compressImage = (file, size) => {
    const newPath = file.path.split('.')[0] + '.webp';

    return sharp(file.path)
        .resize(size)
        .toFormat('webp')
        .webp({quality: 100})
        .toBuffer()
        .then(data => {

            fs.access(file.path, (err) => {

                // Um erro significa que a o arquivo não existe, então não tentamos apagar
                if (!err) {
                    
                    //Se não houve erros, tentamos apagar
                    fs.unlink(file.path, err => {

                        // Não quero que erros aqui parem todo o sistema, então só vou imprimir o erro, sem throw.
                        if(err) console.log(err)
                    })
                }
            });
            
            //Agora vamos armazenar esse buffer no novo caminho
            fs.writeFile(newPath, data, err => {
                if(err){
                    // Já aqui um erro significa que o upload falhou, então é importante que o usuário saiba.
                    throw err;
                }
            });

            // Se o código chegou até aqui, deu tudo certo, então vamos retornar o novo caminho
            return newPath;
        })
}