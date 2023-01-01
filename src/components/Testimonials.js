import React from 'react'
import Usercard from './Usercard'

export default function Testimonials() {
  return (
    <>
    <div className='testimonial-main'>
      <div className='testimonial-heading'>
      <h1>What Our Users Think About Us</h1>
      </div>
    <div className='testimonial-final'>

      <div className='testimonial-row'>
    <Usercard
    imageLink = 'https://i.pravatar.cc/100?img=10'
    imageText = {<b>“I've been using top posts for a week now, and it's gotten me back into reading the news every day.“</b>}
    name = '-Divya'
    source = '(Buisness Consultant)'
    />
    <Usercard
    imageLink = 'https://i.pravatar.cc/100?img=32'
    imageText = {<b>“My news consumption went from 0 to checking 2-5x/day.“</b>}
    name = '-Alix'
    source = '(Architect)'
    />
    <Usercard
    imageLink = 'https://i.pravatar.cc/100?img=55'
    imageText = {<b>“I have used different apps for reading news/articles and I found Top Posts to be the most effective.“</b>}
    name = '-Danny'
    source = '(Software Developer)'
    />
      </div>
    <div className='testimonial-row'>
    <Usercard
    imageLink = 'https://i.pravatar.cc/100?img=56'
    imageText = {<b>“I think Top Posts does a great job in being highly informative and in-depth, I am excited to continue exploring.“</b>}
    name = '-Felix'
    source = '(Lawer)'
    />
    <Usercard
    imageLink = 'https://i.pravatar.cc/100?img=57'
    imageText = {<b>“Simplicity in the interface helps to be precise with the content and does not entertain you with unwanted stuff.“</b>}
    name = '-Bobby'
    source = '(Buisness owner)'
    />
    <Usercard
    imageLink = 'https://i.pravatar.cc/100?img=64'
    imageText = {<b>“Top Posts provides you with the best of news around the world in short and crisp formulation“</b>}
    name = '-Jim'
    source = '(Musician)'
    />
    </div>
    </div>
    </div>
    </>
  )
}
