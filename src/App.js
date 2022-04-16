import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Display from "./Components/Display/Display"
import React from 'react';

class App extends React.Component {
  state = {
    pageSelected: "Courses",
    filterSelected: "Popular",
    filterList: [
      {
        id: 0,
        title: "Popular",
        active: true,
      },
      {
        id: 1,
        title: "Favorite",
        active: false,
      },
      {
        id: 2,
        title: "New",
        active: false,
      },
    ],
    pageList: [
        {
            id: 0,
            title: "Courses",
            url: "https://cdn-icons-png.flaticon.com/512/3524/3524883.png",
            active: true,
        },
        {
            id: 1,
            title: "Shopping List",
            url: "http://cdn.onlinewebfonts.com/svg/img_567483.png",
            active: false,
        },
        {
            id: 2,
            title: "Group",
            url: "https://freeiconshop.com/wp-content/uploads/edd/many-people-outline.png",
            active: false,
        }
    ],
    Courses: [
      {
        id: 0,
        date: 10,
        Evaluation: 5,
        Lessons: 30,
        title: "Ilustration",
        img: "https://i.pinimg.com/736x/59/6c/7c/596c7cdb4acbebf6f4be7d6a26614f63--backgrounds-hd-desktop-wallpapers.jpg",
      },
      {
        id: 1,
        date: 37,
        Evaluation: 8,
        Lessons: 29,
        title: "Graphic design",
        img: "https://wallpaperaccess.com/full/1745604.jpg",
      },
      {
        id: 2,
        date: 34,
        Evaluation: 1,
        Lessons: 31,
        title: "Software",
        img: "https://wallpaperaccess.com/full/2044917.jpg",
      },
      {
        id: 3,
        date: 58,
        Evaluation: 9,
        Lessons: 15,
        title: "Product management",
        img: "https://wallpaperaccess.com/full/2044913.png",
      },
      {
        id: 4,
        date: 21,
        Evaluation: 4,
        Lessons: 25,
        title: "Marketing",
        img: "https://wallpapercave.com/wp/wp2853390.jpg",
      },
      {
        id: 5,
        date: 65,
        Evaluation: 8,
        Lessons: 28,
        title: "Design",
        Evaluation: 2,
        img: "https://wallpaper.dog/large/20449397.jpg",
      },
    ],
    CoursesView: [],
  }

  componentDidMount(){
    this.setState({
      CoursesView: this.state.Courses
    })
  }

  selectPage = (e) => {
    for(let i = 0; i < this.state.pageList.length; i++){
        this.state.pageList[i].active = false
    }
    e.active = true
    this.setState({
      pageSelected: e.title
    })
  }

  selectFilter = (e) => {
    for(let i = 0; i < this.state.filterList.length; i++){
      this.state.filterList[i].active = false
    }
    e.active = true
    if(e.title === "Popular"){
      this.setState({
        CoursesView: this.state.Courses
      })
    }
    if(e.title === "Favorite"){
      const favorite = this.state.Courses.filter(e => e.Evaluation > 7)
      this.setState({
        CoursesView: favorite
      })
    }
    if(e.title === "New"){
      const newC = this.state.Courses.filter(e => e.date < 30)
      this.setState({
        CoursesView: newC
      })
    }
    this.setState({})
  }

  render(){
    return (
      <>
        <div className='container'>
          <Navbar
            state = {this.state}
            selectPage = {this.selectPage}
          />
          <Display
            state = {this.state}
            CoursesView = {this.state.CoursesView}
            pageSelected = {this.state.pageSelected}
            filterList = {this.state.filterList}
            selectFilter = {this.selectFilter}
          />
        </div>
      </>
    )
  }
}

export default App;
