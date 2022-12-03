import React from "react"
import { Link, Outlet, useParams, useNavigate } from "react-router-dom"
import './aboutUs.css'




const desarrolladores = [
    {
        name: 'Felipe Akvaar Medina Carrillo',
        photo: '/assets/images/Felipe.jpg',
        redes: [
            {
                href: 'https://www.linkedin.com/in/fm9408/',
                icon: '/assets/icons/linkedin.svg'
            },
            {
                href: 'https://github.com/FM9408',
                icon: '/assets/icons/github.svg'
            },
            {
                href: 'https://twitter.com/FeLiPe_MeDiNa_',
                icon: '/assets/icons/twitter.svg'
            },
            {
                href: 'https://www.facebook.com/FeliMed94',
                icon: '/assets/icons/facebook.svg'
            }
        ]

    },
    {
        name: 'Graciela Irene Nieto Ayala',
        photo: '/assets/images/Graciela.jpg',
        redes: [
            {
                href: '',
                icon: '/assets/icons/linkedin.svg'
            },
            {
                href: 'https://github.com/GrachiNieto33',
                icon: '/assets/icons/github.svg'
            }
        ]
    },
    {
        name: 'Jose Alexander Ballen Meneses',
        photo: '/assets/images/Alex.jpg',
        redes: [
            {
                href: '',
                icon: '/assets/icons/linkedin.svg'
            },
            {
                href: 'https://github.com/alexballen',
                icon: '/assets/icons/github.svg'
            }
        ]
    },
    {
        name: 'Josmer Uriel Bertel Calle',
        photo: '/assets/images/josmer.jpg',
        redes: [
            {
                href: 'https://www.linkedin.com/in/josmer-bertel-calle-12569a236/',
                icon: '/assets/icons/linkedin.svg'
            },
            {
                href: 'https://github.com/JOSY12',
                icon: '/assets/icons/github.svg'
            }
        ]
    },
    {
        name: 'Ignacio Martin',
        redes: [
            {
                href: '',
                icon: '/assets/icons/linkedin.svg'
            },
            {
                href: 'https://github.com/IggyMartin',
                icon: '/assets/icons/github.svg'
            }
        ]
    },
    {
        name: 'Andres Eduardo Cardozo Landaeta',
        photo: '/assets/images/Andres.jpg',
        redes: [
            {
                href: 'https://www.linkedin.com/in/andr%C3%A9s-eduardo-cardozo-landaeta-8940ba150/',
                icon: '/assets/icons/linkedin.svg'
            },
            {
                href: 'https://github.com/Arres2',
                icon: '/assets/icons/github.svg'
            }
        ]
    }
]

export function AboutUsPage({ open, setOpen }) {
    const navigate = useNavigate()
    
    
    function handleOpen(e) {
        if (open === true) {
            setOpen(false)
            setTimeout(() => {
                navigate('/aboutUs')
                setOpen(true)
                navigate(`/aboutUs/${e.name}`)
                
                
            }, 2000)
        } else {
            setOpen(true)
            navigate(`/aboutUs/${e.name}`)
            
       }
   }

    return (
        <div style={{width: '100%'}}>
            <div style={{padding: '1%'}}>
                <h1 style={{ fontSize: '3em', textAlign: 'center', width: '100%' }}>Nuestros desarrolladores: </h1>
            </div>
            <div style={{display: 'inline-flex', margin:'auto', width: '100%'}}>
                {
                    desarrolladores.map(desarrollador => {
                        return (
                            <div style={{ margin: 'auto', display: 'flex', textAlign: 'center' }}>
                                <button onClick={() => handleOpen(desarrollador)}>
                                    <div style={{display: 'flex', justifyContent: 'center', height: '11em' }}>
                                        <img alt='foto del desarrolador' src={desarrollador.photo} className='miniDev'  />
                                    </div>
                                     <div style={{padding: '1%', marginTop:'5%', border: '1px solid black', borderRadius: '3%', backgroundColor: 'black', color: 'white'}}><h2 style={{fontSize: '1.5em'}}>{desarrollador.name}</h2></div>
                                </button>
                               
                            </div>
                        )
                    })
                }
            </div>
            <Outlet />
            <div onPointerEnter={() => setOpen(false)} style={{width: '100%', textAlign: 'center'}}>
                <div style={{width: '100%'}}>
                    <h1 style={{fontSize: '5em'}}>Nuesta vision:</h1>
                </div>
            </div>
        </div>
    )
}


export function Desarrollador({open, setOpen}) {
    const desarrollador = useParams()
    const desarrolladorDetails = desarrolladores.filter(des => des.name === desarrollador.desarrollador)[0]
    const [classVar, setClass] = React.useState('closed')
    const navigate = useNavigate()
   
    

    function handleClose() {
        setOpen(false)
        setTimeout(() => {
            navigate('/aboutUs')
        }, 2100)
    }



    React.useEffect(() => {
        if (open === true) {
            setClass("open")
        } else {
            setClass('closed')
        }


        
    }, [open])


    return (
        <div className={classVar} >
           
            <div style={{ width: '100%' , height: 'fit-content' }}>
                <div><button onClick={() => handleClose()}><img src='/assets/icons/x-circle.svg'/></button></div>
                <div style={{ width: '50%', float: 'left', display: 'flex', justifyContent: 'center' }}>
                <div style={{ alignContent:'center', display:'flex', justifyContent:'center', backgroundColor: 'white', borderRadius: '50%', width: '26em', height:'26em' }}>
                    <img src={desarrolladorDetails.photo} className={`developerPhoto ${classVar}`} />
                        </div>
                </div>
                <div>
                    <div>
                        <h1 style={{ fontSize: '3em', textAlign: 'center' }}>{desarrolladorDetails.name}</h1>
                    </div>
                    <hr/>
                    <div style={{height: '20em'}}>
                
                    </div>
                </div>
                <div style={{float: 'right'}}>
                    <div style={{display:'block', width: '100%'}}><h2>Contacto y redes sociales:</h2></div>
                    <div style={{display: 'auto'}}>
                        {
                            desarrolladorDetails.redes.map(red => {
                                return (
                                   <div style={{margin: 'auto', display: 'inline-flex', padding: '1%'}}> <a href={red.href} target='_blank' style={{margin:'auto'}}><img src={red.icon} alt='icon' /></a></div>
                                )
                            })
                        }
                    </div>
                </div>
                </div>
                
            
        </div>
    )
}