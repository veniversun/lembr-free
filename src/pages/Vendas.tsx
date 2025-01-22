import React from 'react';
import { Header } from '@/components/home/Header';
import { MessageBox } from '@/components/home/MessageBox';
import { ComparisonTable } from '@/components/sales/ComparisonTable';
import { HorizontalAnalytics } from '@/components/sales/HorizontalAnalytics';

const Vendas = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-start bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 md:p-8">
        <MessageBox />
        <ComparisonTable />
        <HorizontalAnalytics />
      </div>
    </div>
  );
};

export default Vendas;