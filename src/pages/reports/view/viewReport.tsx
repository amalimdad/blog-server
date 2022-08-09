
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import messages from '../../../assets/local/messages';
import logo from "../../../assets/images/logo.svg"



export const ViewReport = () => {
  let report: Report = {
    id: 1,
    title: "whwpfrfrepovkepojvrepovj vckerpvekrpov",
    image_url: 'https://yu.edu.sa/wp-content/uploads/2020/07/fin2.jpg',
    created_at: '11/ 2/ 2033',
    auther: { id: 2, name: "Amal Saleem" },
    contents: [
      {
        id: 1,
        headline: '',
        description: " ..حيحصلا ناكملا يف تنأف تنرتنإلا ىلع تاجتنملا عيب ةيفيك ةفرعمو كلذ نم حبرلا قيقحت يف بغرت تنك اذإ ،رهش لك تنرتنإلا ربع ةمدخ وأ جتنم ءارش نع نآلا نييدوعسلا نم ٪64 غلّبيُ",
        image_path: ''
      },
      {
        id: 2,
        headline: 'what is the usful of benijg',
        description: " ..حيحصلا ناكملا يف تنأف تنرتنإلا ىلع تاجتنملا عيب ةيفيك ةفرعمو كلذ نم حبرلا قيقحت يف بغرت تنك اذإ ،رهش لك تنرتنإلا ربع ةمدخ وأ جتنم ءارش نع نآلا نييدوعسلا نم ٪64 غلّبيُ",
        image_path: ''
      },
      {
        id: 3,
        headline: '؟تنرتنإلا ىلع هعيبتس يذلا ام',
        description: " ..حيحصلا ناكملا يف تنأف تنرتنإلا ىلع تاجتنملا عيب ةيفيك ةفرعمو كلذ نم حبرلا قيقحت يف بغرت تنك اذإ ،رهش لك تنرتنإلا ربع ةمدخ وأ جتنم ءارش نع نآلا نييدوعسلا نم ٪64 غلّبيُ",
        image_path: 'https://www.loyensloeff.com/contentassets/7ca5076ac555499c84ceedf4553233de/money-2.jpg?width=580&height=387'
      }
    ]
  }

  const { id } = useParams();
  // call api of view report id

  return (
    <>
      <div className='module-header'>
        <div className='flex flex-col md:w-9/12  px-20 md:px-40 lg:px-80'>
          <h1 className='text-white text'>{report.title}</h1>
          <div className='flex items-center text-white mt-10'>
            <img src={logo} alt="" className='w-32 h-32 rounded-full' />
            {report.auther?.name ? <span className='pe-5'>{messages.ar.by} / {report.auther.name}</span> : ''}
            {report.auther?.name && report.created_at ? <>|</> : ''}
            {report.created_at ? <span className='px-5'> {messages.ar.since}: {report.created_at}</span> : ''}
          </div>
        </div>
      </div>
      <div className='mx-auto px-20 md:px-40 lg:px-80'>
        <img src={report.image_url} alt="" className='w-full my-20 md:my-40' />
        {
          report.contents?.map((content, i) => <>
            {
              content?.headline && content?.headline.length > 0 ?
                <p className="'text-black800 mb-7">
                  <span className='text-tiffany me-3'>|</span>
                  <span className="text-lg text-black900 "
                  > {content.headline}
                  </span>
                </p>
                : ''
            }
            {
              content.image_path
                ? <img src={content.image_path} alt="" className='w-full my-20 md:my-40' />
                : ''
            }
            <p>{content.description}</p>
          </>)
        }
      </div>
    </>
  );
}
export default ViewReport;

export interface Report {
  id: number;
  title: string;
  image_url?: string;
  auther?: { id: number, name: string };
  created_at?: string;
  contents?: {
    id: number,
    headline?: string,
    description?: string,
    image_path?: string,
  }[]
}