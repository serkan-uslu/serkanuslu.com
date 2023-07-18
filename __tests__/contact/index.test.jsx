import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyForm from '../../src/pages/contact';

describe('MyForm', () => {
  it('renders the form', () => {
    const { getByLabelText, getByText } = render(<MyForm />);
    expect(getByLabelText(/Adınız/i)).toBeInTheDocument();
    expect(getByLabelText(/E-posta/i)).toBeInTheDocument();
    expect(getByLabelText(/Mesajınız/i)).toBeInTheDocument();
    expect(getByText(/Gönder/i)).toBeInTheDocument();
  });

  it('shows validation errors when fields are touched and left empty', async () => {
    const { getByLabelText, getByText } = render(<MyForm />);
    fireEvent.blur(getByLabelText(/Adınız/i));
    fireEvent.blur(getByLabelText(/E-posta/i));
    fireEvent.blur(getByLabelText(/Mesajınız/i));
    await waitFor(() => {
      expect(getByText(/Adınız gereklidir/i)).toBeInTheDocument();
      expect(getByText(/E-posta gereklidir/i)).toBeInTheDocument();
      expect(getByText(/Mesajınız gereklidir/i)).toBeInTheDocument();
    });
  });

  it('shows validation error when name is more than 20 characters', async () => {
    const { getByLabelText, getByText } = render(<MyForm />);
    fireEvent.change(getByLabelText(/Adınız/i), {
      target: { value: 'a'.repeat(21) },
    });
    fireEvent.blur(getByLabelText(/Adınız/i));
    await waitFor(() => {
      expect(getByText(/Adınız 20 karakterden fazla/i)).toBeInTheDocument();
    });
  });

  it('shows validation error when message is more than 256 characters', async () => {
    const { getByLabelText, getByText } = render(<MyForm />);
    fireEvent.change(getByLabelText(/Mesajınız/i), {
      target: { value: 'a'.repeat(257) },
    });
    fireEvent.blur(getByLabelText(/Mesajınız/i));
    await waitFor(() => {
      expect(getByText(/Mesajınız 256 karakterden fazla/i)).toBeInTheDocument();
    });
  });
});
