function calcular (){

var data = new Date()
var ano = data.getUTCFullYear()
let idade = document.getElementById('idade')
let res = document.getElementById('res')
document.body.style.backgroundColor = ``


if (idade.value <= 0 || Number(idade.value) > ano ){
    window.alert('ERRO!! VERIFIQUE O ANO DE NASCIMENTO')
}else{
let sexo = document.getElementsByName('sexo')
let ida = ano - Number(idade.value)
var genero = ''
var img = document.createElement('img')
img.setAttribute('id', 'foto')


if (sexo[0].checked){
    genero = 'Mulher'
    if (ida >=0 && ida <15){
        res.innerHTML = `Você é criança que tem ${ida} anos \u{1F9D2}<br>`
        img.setAttribute('src', 'mulher-bebe.png')
        document.body.style.background = `#ff50a2`
    }else if (ida >=15 && ida < 45){
        res.innerHTML = `Você é adulta e tem ${ida} anos \u{1F467}<br>`
        img.setAttribute('src', 'mulher-adulta.png')
        document.body.style.background = `#ff50a2`

    }else if ( ida >=45 && ida<100){
        res.innerHTML = `Você está na melhor idade e tem ${ida} anos  \u{1F469}<br>`
        img.setAttribute('src','mulher-idosa.png' )
        document.body.style.background = `#ff50a2`

    }else {
        mumia()

    }
    }
else if (sexo[1].checked){
    genero = 'Homem'
    if (ida >=0 && ida < 15){
        res.innerHTML = `Você é criança e tem ${ida} anos \u{1F9D1}<br>`
        img.setAttribute('src','homem-bebe.png')
        document.body.style.background = `#60a2ee`
    }else if ( ida >=15 && ida < 45){
        res.innerHTML = `Você é adulto e tem ${ida} anos \u{1F468}<br>`
        img.setAttribute('src','homem-adulto.png')
        document.body.style.background = `#60a2ee`

    }else if (ida > 45 && ida < 100){
        res.innerHTML = `Você está na melhor idade e tem ${ida}anos \u{1F9D4}<br>`
        img.setAttribute('src','homem-idoso.png')
        document.body.style.background = `#60a2ee`

    }else{
        mumia()
    }

    
}else if (sexo[2].checked){
    genero = 'Indefinido'
    if (ida >=0 && ida < 15){
        res.innerHTML = `Você é uma criança e tem ${ida} anos  <br>`
        img.setAttribute('src','homenaranha.jpg')
        document.body.style.background = '#eef087'
    }else if ( ida >=15 && ida < 45){
        res.innerHTML = `Você é adulto e tem ${ida} anos <br>`
        img.setAttribute('src','homenaranha.jpg')
        document.body.style.background = '#eef087'

    }else if (ida > 45 && ida < 100){
        res.innerHTML = `Você esta na melhor idade e tem ${ida} anos  <br>`
        img.setAttribute('src','homenaranha.jpg')
        document.body.style.background = '#eef087'


    }else{
        mumia()

    }
}    
idade.value = ''
idade.focus()
res.appendChild(img)

function mumia(){
    res.innerHTML = `Múmia com ${ida} Anos \u{2620}<br>`
        img.setAttribute('src','fotomumia.jpg')

}
}
} 

