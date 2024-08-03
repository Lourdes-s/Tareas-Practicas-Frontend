import pepeImage from './assets/Pepe.jpg'
import andreImage from './assets/Andre.jpg'
import mamaImage from './assets/Mama.jpg'
import barbieImage from './assets/Barbie.jpg'
import santiagoImage from './assets/Santiago.jpg'
import enuelImage from './assets/Enuel.jpg'
import silImage from './assets/Sil.jpg'
import lucianaImage from './assets/Luciana.jpg'
import vivianaImage from './assets/Viviana.jpg'
import lorenaImage from './assets/Lorena.jpg'
import streetImage from './assets/Street.jpg'

export const MOOK_CONTACTOS =[
    {
        nombre:  'Pepe',
        apellido: 'Suarez' ,
        id: 1,
        thumbnail: pepeImage,
        telefono: '+54 9 11 6229-2369',
        estado:'Disponible',
        direccion:'Sin informar',
        email: 'pepito@gmail.com' ,
        descripcion: '01100001 01111001 01110101 01100100 01100001',
        estado_contacto:'Ultima vez 13:16',
        mensajes:[
            {
                author: 'pepe',
                text: 'Ayudame loco',
                estado: 'visto',
                day: 'Hoy',
                hour: '13:15',
                id: '1'
            },
            {
                author: 'yo',
                text: '??????',
                estado: 'visto',
                day: 'Hoy',
                hour: '23:50',
                id: '2'
            },
            {
                author: 'pepe',
                text: 'Mati me tiene encerrado en el sotano, necesito ayuda',
                estado: 'visto',
                day: 'Hoy',
                hour: '13:16',
                id: '3'
            },
            {
                author: 'yo',
                text: 'khe?',
                estado: 'entregado',
                day: 'Hoy',
                hour: '13:20',
                id: '4'
            },
        ]
    },
    {
        nombre:  'Andrea',
        apellido: 'Bara' ,
        id: 2,
        thumbnail: andreImage,
        telefono: '+54 9 11 3248-1569',
        estado:'No molestar',
        direccion:'Inglaterra 666',
        email: 'patitos222@gmail.com' ,
        descripcion:'saquenme de la chamba',
        estado_contacto:'En linea',
        mensajes:[
            {
                author: 'yo',
                text: 'Holii',
                estado: 'visto',
                day: 'Hoy',
                hour: '07:10',
                id: '1'
            },
            {
                author: 'Andrea',
                text: 'Holiss, che ami vamos al gym hoy?',
                estado: 'visto',
                day: 'Hoy',
                hour: '12:20',
                id: '2'
            },
            {
                author: 'yo',
                text: 'Sisi, a que hora vamos? ',
                estado: 'visto',
                day: 'Hoy',
                hour: '12:25',
                id: '3'
            },
            {
                author: 'yo',
                text: 'Trabajas hoy?',
                estado: 'visto',
                day: 'Hoy',
                hour: '12:25',
                id: '4'
            },
            {
                author: 'Andrea',
                text: 'sii, hasta las 18',
                estado: 'visto',
                day: 'Hoy',
                hour: '12:40',
                id: '5'
            },
            {
                author: 'yo',
                text: 'dale, vamos 19:00/19:30?',
                estado: 'visto',
                day: 'Hoy',
                hour: '13:47',
                id: '6'
            },
            {
                author: 'Andrea',
                text: 'dale, a las 19',
                estado: 'visto',
                day: 'Hoy',
                hour: '13:50',
                id: '7'
            },
            {
                author: 'yo',
                text: 'oki',
                estado: 'visto',
                day: 'Hoy',
                hour: '13:50',
                id: '8'
            },
            {
                author: 'Andrea',
                text: 'che, todavía me duele el culo de ayer',
                estado: 'visto',
                day: 'Hoy',
                hour: '13:51',
                id: '9'
            },
            {
                author: 'Andrea',
                text: 'tu rutina god 👌',
                estado: 'visto',
                day: 'Hoy',
                hour: '13:51',
                id: '10'
            },
        ]
    },
    {
        nombre:  'Mamá',
        apellido: 'Carpintera' ,
        id: 3,
        thumbnail: mamaImage,
        telefono: '+54 9 11 5967-4569',
        estado:'Disponible',
        direccion:'Huemez 1111',
        email: 'margarett@gmail.com' ,
        descripcion: 'que Dios los bendiga 🙏',
        estado_contacto:'En linea',
        mensajes:[
            {
                author: 'Mamá',
                text: 'Hla lu, dond estss?',
                estado: 'visto',
                day: 'Hoy',
                hour: '19:58',
                id: '1'
            },
            {
                author: 'Mamá',
                text: 'ya es tarde',
                estado: 'visto',
                day: 'Hoy',
                hour: '20:24',
                id: '2'
            },
            {
                author: 'yo',
                text: 'estoy en el gym con andre, enseguida voy',
                estado: 'visto',
                day: 'Hoy',
                hour: '21:00',
                id: '3'
            },
            {
                author: 'Mamá',
                text: 'ok',
                estado: 'visto',
                day: 'Hoy',
                hour: '21:10',
                id: '4'
            },
        ]   
    },
    {
        nombre:  'Barbie',
        apellido: 'Guard',
        id: 4,
        thumbnail: barbieImage,
        telefono: '+54 9 1173667569',
        estado:'Disponible',
        direccion:'Barbie land',
        email: 'esteticapretty@gmail.com' ,
        descripcion: 'Turnos disponibles💖💋',
        estado_contacto:'En linea',
        mensajes:[
            {
                author: 'Barbie',
                text: 'Hola lour',
                estado: 'visto',
                day: 'Hoy',
                hour: '17:50',
                id: '1'
            },
            {
                author: 'Barbie',
                text: 'te queria avisar que mañana hacemos fecha completa',
                estado: 'visto',
                day: 'Hoy',
                hour: '17:50',
                id: '2'
            },
            {
                author: 'yo',
                text: 'Dale, gracias por avisar',
                estado: 'visto',
                day: 'Hoy',
                hour: '18:53',
                id: '3'
            },
            {
                author: 'Barbie',
                text: 'A vos, nos vemos 😘',
                estado: 'visto',
                day: 'Hoy',
                hour: '18:53',
                id: '4'
            },
        ]
    },
    {
        nombre:  'Santiago',
        apellido: 'UTN' ,
        id: 5,
        thumbnail: santiagoImage,
        telefono: '+54 9 11 75582469',
        estado:'Asesor Academico del area de Diseño Multimedial de la UTN BA',
        direccion:'Av. Medrano 951',
        email: 'snobile@frba@gmail.com',
        estado_contacto:'Ultima vez Ayer 18:00',
        mensajes:[
            {
                author: 'yo',
                text: 'Hola buenas tardes, tengo una consulta',
                estado: 'visto',
                day: 'Ayer',
                hour: '12:40',
                id: '1'
            },
            {
                author: 'yo',
                text: 'Queria saber si me pueden hacer una constancia de alumno regular para el trabajo, estoy haciendo programacion fullStack los lunes y miercoles de 19 a 22.',
                estado: 'visto',
                day: 'Ayer',
                hour: '12:40',
                id: '2'
            },
            {
                author: 'Santiago',
                text: 'hola buenas tardes! puedes solicitarme certificado de alumno regular a mi mail snobile@frba.utn.edu.ar',
                estado: 'visto',
                day: 'Ayer',
                hour: '13:49',
                id: '3'
            },
            {
                author: 'yo',
                text: 'Hola santi, te queria consultar, porque me llego un mensaje raro y no se que hacer',
                estado: 'entregado',
                day: 'Hoy',
                hour: '17:00',
                id: '4'
            },
            {
                author: 'yo',
                text: 'vos conoces a Mati (profe de UTN) en persona?',
                estado: 'entregado',
                day: 'Hoy',
                hour: '17:00',
                id: '5'
            },
        ]
    },
    {
        nombre:  'Enuel',
        apellido: 'UTN' ,
        id: 6,
        thumbnail: enuelImage,
        telefono: '+54 9 11 27479201',
        estado:'Codeando',
        direccion:'Av. siempre viva 123',
        email: 'enueldev@gmail.com' ,
        estado_contacto:'Ultima vez Ayer 18:00',
        mensajes:[
            {
                author: 'yo',
                text: 'Hola enuel',
                estado: 'entregado',
                day: 'Hoy',
                hour: '18:00',
                id: '1'
            },
            {
                author: 'yo',
                text: 'A vos tambien te llego un mensaje raro?',
                estado: 'entregado',
                day: 'Hoy',
                hour: '18:00',
                id: '2'
            }
        ]
    },
    {
        nombre:  'Sil',
        apellido: 'Warner' ,
        id: 7,
        thumbnail: silImage,
        telefono: '+54 9 1151166169',
        estado:'Chambeando',
        direccion:'Montegrave 236',
        email: 'silvi@gmail.com' ,
        estado_contacto:'Escribiendo...',
        mensajes:[
            {
                author: 'yo',
                text: 'Che ami, me paso algo re turbio',
                estado: 'visto',
                day: 'Hoy',
                hour: '20:00',
                id: '1'
            }
        ]
    }, 
    {
        nombre:  'Luciana',
        apellido: 'Odonto' ,
        id: 8,
        thumbnail: lucianaImage,
        telefono: '+54 9 1136680069',
        estado:'Odontologia y todas sus especialidades',
        direccion:'Loma hermosa 923',
        email: 'luodonto@gmail.com' ,
        estado_contacto:'Escribiendo...',
        mensajes:[
            {
                author: 'yo',
                text: 'Hola lu, queria saber si este mes voy',
                estado: 'visto',
                day: 'Ayer',
                hour: '11:00',
                id: '1'
            },
            {
                author: 'Luciana',
                text: 'Hola hermosa mia!',
                estado: 'visto',
                day: 'Ayer',
                hour: '12:31',
                id: '2'
            },
            {
                author: 'Luciana',
                text: 'Mira este mes lo mejor es que no pises la uba a menos que te te quieras chamuscar',
                estado: 'visto',
                day: 'Ayer',
                hour: '12:32',
                id: '3'
            },
            {
                author: 'Luciana',
                text: 'Yo me tuve que ir porque nos peleamos un par ahi, es tremendo',
                estado: 'visto',
                day: 'Ayer',
                hour: '12:32',
                id: '4'
            },
            {
                author: 'Luciana',
                text: 'Ya el mes que viene todo estara mejor hermosa, mucha mala vibra',
                estado: 'visto',
                day: 'Ayer',
                hour: '12:32',
                id: '5'
            },
            {
                author: 'yo',
                text: 'Dale lu, nos vemos el mes que viene enonces',
                estado: 'visto',
                day: 'Ayer',
                hour: '12:40',
                id: '6'
            },
        ]
    }, 
    {
        nombre:  'Viviana',
        apellido: 'Petshop' ,
        id: 9,
        thumbnail: vivianaImage,
        telefono: '+54 9 1166065669',
        estado:'Viviana consultorio pacheco',
        direccion:'hipolito yrigoyen 1044',
        email: 'vivianapetshop@gmail.com' ,
        estado_contacto:'En linea',
        mensajes:[
            {
                author: 'yo',
                text: 'Hola buenas tardes, queria sacar un turno con el cardiologo',
                estado: 'visto',
                day: 'Ayer',
                hour: '12:21',
                id: '1'
            },
            {
                author: 'yo',
                text: 'Para mi gato, se llama blacky, es paciente',
                estado: 'visto',
                day: 'Ayer',
                hour: '12:21',
                id: '2'
            },
            {
                author: 'Viviana petshop',
                text: 'Buemas tardes, cuando el Dr nos paso el turno les avisamos',
                estado: 'visto',
                day: 'Ayer',
                hour: '12:53',
                id: '3'
            },
            {
                author: 'Viviana petshop',
                text: 'Viernes 09 09.15hs?',
                estado: 'visto',
                day: 'Ayer',
                hour: '14:13',
                id: '4'
            },
            {
                author: 'yo',
                text: 'Bueno dale',
                estado: 'visto',
                day: 'Ayer',
                hour: '14:54',
                id: '5'
            },
        ]
    }, 
    {
        nombre:  'Lorena',
        apellido: 'Reiki' ,
        id: 10,
        thumbnail: lorenaImage,
        telefono: '+54 9 1140345182',
        estado:'Terapias holisticas para sanacion del alma',
        direccion:'Pasteur 444',
        email: 'gratitud@gmail.com' ,
        estado_contacto:'En linea',
        mensajes:[
            {
                author: 'yo',
                text: 'Pregunta',
                estado: 'visto',
                day: 'Ayer',
                hour: '18:59',
                id: '1'
            },
            {
                author: 'yo',
                text: 'Cuanto estan las flores de bach?',
                estado: 'visto',
                day: 'Ayer',
                hour: '18:59',
                id: '1'
            },
            {
                author: 'Lorena',
                text: '30cc $5.000 y 60cc $8.500',
                estado: 'visto',
                day: 'Ayer',
                hour: '18:59',
                id: '1'
            },
        ]
    }, 
    {
        nombre:  '47',
        apellido: 'Street' ,
        id: 11,
        thumbnail: streetImage,
        telefono: '+54 9 1150460769',
        estado:'Horario: Lunes a Domingos de 10:00 a 22:00',
        direccion:'TOM',
        email: '47street@gmail.com' ,
        estado_contacto:'En linea',
        mensajes:[
            {
                author: '47 street',
                text: '¡Hola! Te hablo de 47 Street de Tortugas 🐢 ✨. Queríamos comunicarte que llegó tu pedido, para retirarlo tenes que venir con el dni del titular de la compra o con el número de pedido. Los horarios y los dias para retirar son de lunes a lunes de 10am a 22pm. Saludos!',
                estado: 'visto',
                day: 'Ayer',
                hour: '20:00',
                id: '1'
            }
        ]
    }, 
]


