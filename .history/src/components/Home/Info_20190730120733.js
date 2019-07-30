import React from 'react'
import {Link} from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="our story">
                    
                </Title>
                <div className="row">
                    <div className="col-10 col-sm-8 text-center mx auto">
                        <p className="lead text-muted mb-5">
                        Peanut punch is a popular beverage amongst many Caribbean islands especially Jamaica, Trinidad and Guyana. The drink is regarded as a ‘man’s drink’ due to the high energy levels it yields from the high protein and fat content.
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">about page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
