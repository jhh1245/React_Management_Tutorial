import React from 'react'; //라이브러리를 불러옴 

class Customer extends React.Component {
    render() {  // 실제 그리는 내용 
        return ( //render는 return안에 출력될 내용을 작성해야함 
            <div>
                <CustomerProfile id={this.props.id} img={this.props.image} name={this.props.name} />
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
            </div>
        )

    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"></img>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}
class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}


export default Customer; //다른 컴포넌트에서도 사용할 수 있도록 내보내기 