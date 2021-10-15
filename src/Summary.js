import React from 'react';

class Summary extends React.Component{
    render(){
        return(
            <div className = "summary-container">
                <div className = 'summary-header'><p className = "summary-header-name">Анкета</p></div>
                <p className = 'summary-data'><span>Имя:</span>{this.props.firstName}</p>
                <p className = 'summary-data'><span>Фамилия:</span>{this.props.secondName}</p>
                <p className = 'summary-data'><span>Дата рождения:</span>{this.props.date}</p>
                <p className = 'summary-data'><span>Телефон:</span>{this.props.phoneNumber}</p>
                <p className = 'summary-data'><span>Сайт:</span>{this.props.site}</p>
                <span className = 'summary-data'>О себе:</span>
                <p className = 'summary-data'>{this.props.about}</p>
                <span className = 'summary-data'>Стэк технологий:</span>
                <p className = 'summary-data'>{this.props.stack}</p>
                <span className = 'summary-data'>Описание последнего проекта:</span>
                <p className = 'summary-data'>{this.props.lastProj}</p>
            </div>
        )
    }
}

export default Summary;