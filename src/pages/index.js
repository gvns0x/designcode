import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import styled from 'styled-components'
import CaseStudies from '../components/cases'
import Form from '../components/form'

const Main = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`

const IndexPage = () => (
  <Main>
    <div className="Hero">
    <svg width="1902" height="436" viewBox="0 0 457 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M221.226 13.3134L222.539 9.33078L218.845 8.07446L217.391 11.7447L221.226 13.3134ZM180.854 44.4064L179.616 48.4138L179.635 48.4195L179.653 48.4252L180.854 44.4064ZM5.02392 72.2826L1.04905 71.1274L0 74.8524L3.57037 76.2145L5.02392 72.2826ZM48.5829 88.9014L47.1295 92.8332L50.8183 94.2404L52.379 90.565L48.5829 88.9014ZM164.917 95.8705L166.275 91.9034L166.258 91.8973L166.24 91.8912L164.917 95.8705ZM268.502 29.396L272.432 30.7049L273.712 26.7387L269.815 25.4134L268.502 29.396ZM362.741 16.8V12.6H360.271L359.101 14.8083L362.741 16.8ZM318.201 100.8L314.561 98.8081L311.278 105H318.201V100.8ZM382.73 100.8V105H384.725L385.966 103.413L382.73 100.8ZM448.434 16.8L451.671 19.4129L457 12.6H448.434V16.8ZM217.391 11.7447C212.678 23.6354 207.678 32.0781 201.982 36.8878C196.606 41.4278 190.365 42.9498 182.055 40.3874L179.653 48.4252C190.466 51.7598 199.63 49.7973 207.268 43.3476C214.586 37.1675 220.211 27.1152 225.061 14.8822L217.391 11.7447ZM182.091 40.399C167.578 35.7737 155.062 26.2347 140.09 17.0855C125.393 8.10512 108.938 0 87.8923 0V8.4C106.687 8.4 121.573 15.5733 135.828 24.2836C149.806 32.8253 163.85 43.3894 179.616 48.4138L182.091 40.399ZM87.8923 0C70.4743 0 52.4607 4.46682 36.8901 15.7211C21.2846 27.0005 8.44205 44.8762 1.04905 71.1274L8.9988 73.4381C15.9484 48.7612 27.8069 32.5954 41.6837 22.5655C55.595 12.5105 71.8442 8.4 87.8923 8.4V0ZM3.57037 76.2145L47.1295 92.8332L50.0365 84.9694L6.47748 68.3508L3.57037 76.2145ZM52.379 90.565C61.4329 69.2456 74.4768 62.5445 85.7675 62.5445V54.1445C70.4979 54.1445 54.8566 63.526 44.7867 87.2376L52.379 90.565ZM85.7675 62.5445C96.9302 62.5445 109.132 68.963 122.597 77.2787C135.618 85.3201 149.748 95.0985 163.594 99.8495L166.24 91.8912C153.527 87.5291 140.565 78.5444 126.893 70.1009C113.665 61.9324 99.5715 54.1445 85.7675 54.1445V62.5445ZM163.56 99.8374C191.372 109.661 214.851 104.787 233.309 90.9399C251.564 77.2472 264.568 55.0572 272.432 30.7049L264.575 28.0869C257.032 51.4462 244.804 71.875 228.397 84.1823C212.197 96.3356 191.584 100.843 166.275 91.9034L163.56 99.8374ZM269.815 25.4134L222.539 9.33078L219.913 17.2961L267.19 33.3787L269.815 25.4134ZM359.101 14.8083L314.561 98.8081L321.842 102.792L366.381 18.7917L359.101 14.8083ZM385.966 103.413L451.671 19.4129L445.196 14.1871L379.493 98.1872L385.966 103.413ZM448.434 12.6H362.741V21H448.434V12.6ZM318.201 105H382.73V96.6H318.201V105Z" fill="#162BF4"/>
</svg>

    </div>
    <Header/>
    <CaseStudies />
    <Form />
  </Main>
)

export default IndexPage
