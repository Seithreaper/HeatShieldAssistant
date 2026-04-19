import React, { useState } from 'react'
import Tabs from './components/Tabs'
import ProductsTab from './components/ProductsTab'
import CoverageTab from './components/CoverageTab'
import ContainersTab from './components/ContainersTab'
import OrderSheetTab from './components/OrderSheetTab'

export default function App() {
  const [activeTab, setActiveTab] = useState("products")

  return (
    <>
      <Tabs active={activeTab} onChange={setActiveTab} />

      {activeTab === "products" && <ProductsTab />}
      {activeTab === "coverage" && <CoverageTab />}
      {activeTab === "containers" && <ContainersTab />}
      {activeTab === "order" && <OrderSheetTab />}
    </>
  )
}
