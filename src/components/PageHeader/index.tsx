import React from 'react'
import { Link } from 'react-router-dom'

import logoIMG from '../../assets/images/logo.svg'
import backICON from '../../assets/images/icons/back.svg'
import { title } from 'process'

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backICON} alt="Voltar" />
        </Link>
        <img src={logoIMG} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>

        {props.children}
      </div>
    </header>
  )
}

export default PageHeader