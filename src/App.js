
import './App.css';
import Customer from './components/Customer'; //불러옴 

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '980814',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '심청이',
    'birthday': '991116',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '한지운',
    'birthday': '760514',
    'gender': '남자',
    'job': '대학생'
  },
]

function App() {
  return (
    <div>
      {
        customers.map(c => {  // 하나의 원소를 c로 설정, map사용하려면 key라는 props를  가지고 있어야 함 
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>


  );
}

export default App;
