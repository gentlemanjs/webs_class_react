import React from "react";

function PortInfo({title, image, category, id, link}){
    return (
        <article className="port__item">
            <figure className="img">
                <a href={link}><img src={image} alt={id} /></a>
            </figure>
            <div className="text">
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
        </article>
    )
}


function PortCont({data}){
    return (
        <section className="port__cont">
            <div className="container">
                <div className="port__inner">
                    {data.map(data=>(
                        <PortInfo 
                            key={data.title}

                            id={data.id}
                            link={data.link}
                            title={data.title}
                            image={data.image}
                            category={data.category}
                        />
                    ))}
                    {/* <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port01@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title{data[0].id}</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port02@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port03@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port04@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port01@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port02@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port03@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port04@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port01@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port02@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port03@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port04@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port02@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port03@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port04@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article> */}
                </div>
            </div>
        </section>
    )
}

export default PortCont;