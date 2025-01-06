import React from 'react';
import { BooksCarousel } from '@/components/home/BooksCarousel';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Registrado = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="text-center mb-8 mt-12">
        <div className="text-6xl mb-6">
          👏👏👏
        </div>
        <h1 className="text-2xl font-semibold mb-4">
          Obrigado pelo seu cadastro!
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
          Você está entre os primeiros que terão acesso completo ao nosso novo DashBoard 
          com gráficos de evolução e outras funcionalidades!
          <br /><br />
          Te avisamos logo que estiver disponível!
          <br /><br />
          Enquanto isso escolha outro livro para praticar.
          <br />
          Bons estudos!
        </p>
      </div>
      <BooksCarousel />
      <div className="mt-8">
        <Button 
          onClick={() => navigate('/')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-2"
        >
          Início
        </Button>
      </div>
    </div>
  );
};

export default Registrado;