import React from 'react'

export default function Contactenos() {
    return (
        <>
            <div className="container">
                <header className='py-2'>
                    <div className="container">
                        <div className="row">
                            <div>
                                <h2>Escríbenos...¿Cómo te podemos ayudar?</h2>
                            </div>
                        </div>
                    </div>
                </header>

                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Nombres y apellidos</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">E-mail</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Telefono</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
