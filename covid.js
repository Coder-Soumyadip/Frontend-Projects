import React, { useEffect ,useState} from 'react'
import './covid.css'

export default function Covid() {
    const [data,setData]=useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/v4/min/data.min.json')
            const actualData=await res.json();
            console.log(actualData.WB.total);
            setData(actualData.WB.total);
        } catch (err) {
            console.log(err);
        }

    }


    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
        <section>
            <h1>LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>

            <ul>
                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                            <p className='card__name'>
                                <span>OUR </span>
                                STATE
                            </p>
                            <p className='card__total card__small'>BENGAL</p>
                        </div>
                    </div>
                </li>
                <li className='card recovered'>
                    <div className='card__main'>
                        <div className='card__inner'>
                            <p className='card__name'>
                                <span>TOTAL </span>
                                RECOVERED
                            </p>
                            <p className='card__total card__small'>{data.recovered}</p>
                        </div>
                    </div>
                </li>
                <li className='card confirmed'>
                    <div className='card__main'>
                        <div className='card__inner'>
                            <p className='card__name'>
                                <span>TOTAL </span>
                                CONFIRMED
                            </p>
                            <p className='card__total card__small'>{data.confirmed}</p>
                        </div>
                    </div>
                </li>
                <li className='card death'>
                    <div className='card__main'>
                        <div className='card__inner'>
                            <p className='card__name'>
                                <span>TOTAL </span>
                                DEATHS
                            </p>
                            <p className='card__total card__small'>{data.deceased}</p>
                        </div>
                    </div>
                </li>
                <li className='card all'>
                    <div className='card__main'>
                        <div className='card__inner'>
                            <p className='card__name'>
                                <span>ALL </span>
                                TIME
                            </p>
                            <p className='card__total card__small'>{data.tested}</p>
                        </div>
                    </div>
                </li>
                <li className='card vaccine'>
                    <div className='card__main'>
                        <div className='card__inner'>
                            <p className='card__name'>
                                <span>TOTAL </span>
                                VACCINATED
                            </p>
                            <p className='card__total card__small'>{data.vaccinated2}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        </>
    )
}
