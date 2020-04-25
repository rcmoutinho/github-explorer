import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';
import Repository from '../Repository';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="GitHub Explorer" />
    <Title>Explore Repositories on GitHub</Title>

    <Form>
      <input placeholder="Type the repository name..." />
      <button type="submit">Search</button>
    </Form>

    <Repositories>
      <a href="test">
        <img
          src="https://avatars0.githubusercontent.com/u/11356237?s=460&u=f8eddeb9fda5f436a5c49948a6e582f6ce6fccb1&v=4"
          alt="Rodrigo Moutinho"
        />
        <div>
          <strong>public-speaking</strong>
          <p>
            Presentation, Videos, Open Source contributions, Initiatives, etc.
          </p>
        </div>

        <FiChevronRight height={20} />
      </a>

      <a href="test">
        <img
          src="https://avatars0.githubusercontent.com/u/11356237?s=460&u=f8eddeb9fda5f436a5c49948a6e582f6ce6fccb1&v=4"
          alt="Rodrigo Moutinho"
        />
        <div>
          <strong>public-speaking</strong>
          <p>
            Presentation, Videos, Open Source contributions, Initiatives, etc.
          </p>
        </div>

        <FiChevronRight height={20} />
      </a>

      <a href="test">
        <img
          src="https://avatars0.githubusercontent.com/u/11356237?s=460&u=f8eddeb9fda5f436a5c49948a6e582f6ce6fccb1&v=4"
          alt="Rodrigo Moutinho"
        />
        <div>
          <strong>public-speaking</strong>
          <p>
            Presentation, Videos, Open Source contributions, Initiatives, etc.
          </p>
        </div>

        <FiChevronRight height={20} />
      </a>
    </Repositories>
  </>
);

// 2:15

export default Dashboard;
