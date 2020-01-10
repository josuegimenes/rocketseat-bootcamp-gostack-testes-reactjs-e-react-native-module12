import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TechList from '~/components/TechList';

describe('TechList component', () => {
  it('should be able to add new tech', () => {
    const { getByText, getByTestId, debug } = render(<TechList />);

    // Mostra um debug antes de clicar no botão.
    debug();

    fireEvent.click(getByText('Adicionar'));

    // Mostra um debug depois de clicar no botão.
    debug();

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  });
});