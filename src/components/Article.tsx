'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type dataArticle ={
    id : number;
    item : {
        flags: {
            png: string;
            alt: string;
        },
        translations: {
            fra: {
                common: string;
            };
        },
        name: {
            common: string;
            official: string;
            nativeName: {
              [key: string]: {
                common: string;
                official: string;
              };
            }
        }
    }
}

const Article=({item, id}:dataArticle)=> {

    const commonName = item.name.common;

    const handleRoute = () => {
        console.log('route to country page:',commonName)
    }
  return (
            <article className='w-[100%] h-auto border-2 border-slate-400 bg-slate-200 p-2 rounded-lg relative flex flex-row justify-between items-center'>
                <div className=' flex flex-row items-center justify-between '>
                    <Image src={item.flags.png} alt={item.flags.alt} width={80} height={60}/>
                </div>
                <div className=' px-[3px] py-[1px]  flex flex-col justify-between items-right h-full text-right' >
                    <h3 className='text-blue-200 underline text-4 underline-offset-2 '> 
                        {item.translations.fra ? item.translations.fra.common : commonName}
                    </h3>
                    <Link href={`/country/${id}`} className='text-blue-500 cursor-pointer'> Voir plus =></Link>
                </div>

            </article>
  )
}

export default Article;


// const dataFR1= {
//     "name": {
//         "common": "Luxembourg",
//         "official": "Grand Duchy of Luxembourg",
//         "nativeName": {
//             "deu": {
//                 "official": "Großherzogtum Luxemburg",
//                 "common": "Luxemburg"
//             },
//             "fra": {
//                 "official": "Grand-Duché de Luxembourg",
//                 "common": "Luxembourg"
//             },
//             "ltz": {
//                 "official": "Groussherzogtum Lëtzebuerg",
//                 "common": "Lëtzebuerg"
//             }
//         }
//     },
//     "tld": [
//         ".lu"
//     ],
//     "cca2": "LU",
//     "ccn3": "442",
//     "cca3": "LUX",
//     "cioc": "LUX",
//     "independent": true,
//     "status": "officially-assigned",
//     "unMember": true,
//     "currencies": {
//         "EUR": {
//             "name": "Euro",
//             "symbol": "€"
//         }
//     },
//     "idd": {
//         "root": "+3",
//         "suffixes": [
//             "52"
//         ]
//     },
//     "capital": [
//         "Luxembourg"
//     ],
//     "altSpellings": [
//         "LU",
//         "Grand Duchy of Luxembourg",
//         "Grand-Duché de Luxembourg",
//         "Großherzogtum Luxemburg",
//         "Groussherzogtum Lëtzebuerg"
//     ],
//     "region": "Europe",
//     "subregion": "Western Europe",
//     "languages": {
//         "deu": "German",
//         "fra": "French",
//         "ltz": "Luxembourgish"
//     },
//     "translations": {
//         "ara": {
//             "official": "دوقية لوكسمبورغ",
//             "common": "لوكسمبورغ"
//         },
//         "bre": {
//             "official": "Dugelezh Veur Luksembourg",
//             "common": "Luksembourg"
//         },
//         "ces": {
//             "official": "Lucemburské velkovévodství",
//             "common": "Lucembursko"
//         },
//         "cym": {
//             "official": "Grand Duchy of Luxembourg",
//             "common": "Luxembourg"
//         },
//         "deu": {
//             "official": "Großherzogtum Luxemburg,",
//             "common": "Luxemburg"
//         },
//         "est": {
//             "official": "Luksemburgi Suurhertsogiriik",
//             "common": "Luksemburg"
//         },
//         "fin": {
//             "official": "Luxemburgin suurherttuakunta",
//             "common": "Luxemburg"
//         },
//         "fra": {
//             "official": "Grand-Duché de Luxembourg",
//             "common": "Luxembourg"
//         },
//         "hrv": {
//             "official": "Veliko Vojvodstvo Luksemburg",
//             "common": "Luksemburg"
//         },
//         "hun": {
//             "official": "Luxemburgi Nagyhercegség",
//             "common": "Luxemburg"
//         },
//         "ita": {
//             "official": "Granducato di Lussemburgo",
//             "common": "Lussemburgo"
//         },
//         "jpn": {
//             "official": "ルクセンブルク大公国",
//             "common": "ルクセンブルク"
//         },
//         "kor": {
//             "official": "룩셈부르크 대공국",
//             "common": "룩셈부르크"
//         },
//         "nld": {
//             "official": "Groothertogdom Luxemburg",
//             "common": "Luxemburg"
//         },
//         "per": {
//             "official": "دوک‌نشین لوکزامبورگ",
//             "common": "لوکزامبورگ"
//         },
//         "pol": {
//             "official": "Wielkie Księstwo Luksemburga",
//             "common": "Luksemburg"
//         },
//         "por": {
//             "official": "Grão-Ducado do Luxemburgo",
//             "common": "Luxemburgo"
//         },
//         "rus": {
//             "official": "Великое Герцогство Люксембург",
//             "common": "Люксембург"
//         },
//         "slk": {
//             "official": "Luxemburské veľkovojvodstvo",
//             "common": "Luxembursko"
//         },
//         "spa": {
//             "official": "Gran Ducado de Luxemburgo",
//             "common": "Luxemburgo"
//         },
//         "srp": {
//             "official": "Велико Војводство Луксембург",
//             "common": "Луксембург"
//         },
//         "swe": {
//             "official": "Storhertigdömet Luxemburg",
//             "common": "Luxemburg"
//         },
//         "tur": {
//             "official": "Lüksemburg Büyük Dükalığı",
//             "common": "Lüksemburg"
//         },
//         "urd": {
//             "official": "دوقیہ کبیرلکسمبرگ",
//             "common": "لکسمبرگ"
//         },
//         "zho": {
//             "official": "卢森堡大公国",
//             "common": "卢森堡"
//         }
//     },
//     "latlng": [
//         49.75,
//         6.16666666
//     ],
//     "landlocked": true,
//     "borders": [
//         "BEL",
//         "FRA",
//         "DEU"
//     ],
//     "area": 2586,
//     "demonyms": {
//         "eng": {
//             "f": "Luxembourger",
//             "m": "Luxembourger"
//         },
//         "fra": {
//             "f": "Luxembourgeoise",
//             "m": "Luxembourgeois"
//         }
//     },
//     "flag": "🇱🇺",
//     "maps": {
//         "googleMaps": "https://goo.gl/maps/L6b2AgndgHprt2Ko9",
//         "openStreetMaps": "https://www.openstreetmap.org/relation/2171347#map=10/49.8167/6.1335"
//     },
//     "population": 632275,
//     "gini": {
//         "2018": 35.4
//     },
//     "fifa": "LUX",
//     "car": {
//         "signs": [
//             "L"
//         ],
//         "side": "right"
//     },
//     "timezones": [
//         "UTC+01:00"
//     ],
//     "continents": [
//         "Europe"
//     ],
//     "flags": {
//         "png": "https://flagcdn.com/w320/lu.png",
//         "svg": "https://flagcdn.com/lu.svg",
//         "alt": "The flag of Luxembourg is composed of three equal horizontal bands of red, white and light blue."
//     },
//     "coatOfArms": {
//         "png": "https://mainfacts.com/media/images/coats_of_arms/lu.png",
//         "svg": "https://mainfacts.com/media/images/coats_of_arms/lu.svg"
//     },
//     "startOfWeek": "monday",
//     "capitalInfo": {
//         "latlng": [
//             49.6,
//             6.12
//         ]
//     },
//     "postalCode": {
//         "format": "####",
//         "regex": "^(\\d{4})$"
//     }
// }