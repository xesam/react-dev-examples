import { Header, Card } from '@shared/components'
import { formatCurrency } from '@shared/utils'
import './style.css'

function PaymentApp() {
  return (
    <div className="payment-page">
      <Header
        title="支付流程"
        subtitle="安全便捷的支付体验"
      />
      <Card title="订单信息">
        <p>订单号: ORDER-2024-001</p>
        <p>支付金额: {formatCurrency(299.99)}</p>
      </Card>
      <Card title="支付方式">
        <div className="payment-methods">
          <label className="payment-method">
            <input type="radio" name="payment" defaultChecked />
            <span>微信支付</span>
          </label>
          <label className="payment-method">
            <input type="radio" name="payment" />
            <span>支付宝</span>
          </label>
        </div>
      </Card>
    </div>
  )
}

export default PaymentApp
