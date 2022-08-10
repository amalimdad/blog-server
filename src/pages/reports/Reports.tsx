
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import messages from '../../assets/local/messages';
import Card from '../../components/shared/card/Card';
import { WIDTH } from '../../utils/Constant';





export const Reports = () => {

  let blogs = [
    {
      id: 1,
      img_url: "https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022.ashx?bid=d66124ce6b944fad86f787828cc8337b&h=1040&w=1536&hash=97CE6501D10D5930CAE420E1ADC154BB",
      title: "ماهو مستقبل التجارة الالكترونية", description: "من المتوقع أن تزيد المبيعات من 1.3 تريليون عام 2014  الى 4.5 تريليون فى عام 2021",
      subtitle: 'افكار البزنس',
      author: "امل سليم"
    },
    {
      id: 2,
      img_url: "https://eatsleepworkrepeat.com/wp-content/uploads/2020/06/office.jpg",
      title: "ماهو مستقبل التجارة الالكترونية", description: "من المتوقع أن تزيد المبيعات من 1.3 تريليون عام 2014  الى 4.5 تريليون فى عام 2021",
      subtitle: 'افكار البزنس',
      author: "امل سليم"
    },
    {
      id: 3,
      img_url: "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
      title: "ماهو مستقبل التجارة الالكترونية", description: "من المتوقع أن تزيد المبيعات من 1.3 تريليون عام 2014  الى 4.5 تريليون فى عام 2021",
      subtitle: 'افكار البزنس',
      author: "امل سليم"
    },
    {
      id: 4,
      img_url: "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
      title: "ماهو مستقبل التجارة الالكترونية", description: "من المتوقع أن تزيد المبيعات من 1.3 تريليون عام 2014  الى 4.5 تريليون فى عام 2021",
      subtitle: 'افكار البزنس',
      author: "امل سليم"
    }
  ]

  let [isJustifyHight, setJustifyLength] = useState(true)


  useEffect(() => {
    WIDTH >= 768 ? setJustifyLength(isJustifyHight) : setJustifyLength(false)
  })

  let navigate = useNavigate();
  return (
    <>
      <div className='m-16 md:m-22 lg:m-40 '>
        <h3 className='text-center text-2xl md:text-3xl'> {messages.ar.reports.reportsAndStudies}</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-20 my-20 md:my-40">
          {
            blogs.map((report, i) =>
              <Card data={report} isJustifyHight={isJustifyHight} key={i} callbackFunc={() => {
                navigate(`/reports/${report.id}`, { replace: true });
                console.log(report.id);

              }} />)
          }
        </div>
      </div>
    </>
  );
};


export default Reports;


