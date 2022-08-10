
import React from 'react';
import { useParams } from 'react-router-dom';
import messages from '../../../assets/local/messages';
import logo from "../../../assets/images/logo.svg"
import { REPORT } from '../../../utils/Constant';


export const ViewReport = () => {
  //  dummy data
  let report: Report = REPORT

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
          report.contents?.map((content, i) =>
            <div key={i}>
              {
                content?.headline && content?.headline.length > 0 ?
                  <p className="'text-black800 my-20 text-2xl">
                    <span className='text-tiffany me-3'>|</span>
                    <span className="text-black900 "
                    > {content.headline}
                    </span>
                  </p>
                  : ''
              }
              {
                content.image_path
                  ? <img src={content.image_path} alt="" className='w-full my-20 ' />
                  : ''
              }
              <p className='text-black700'>{content.description}</p>
            </div>
          )
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