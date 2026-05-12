import { Header, Card } from '@shared/components'
import { useCounter } from '@shared/hooks'
import './style.css'

function ProfileApp() {
  const { count, increment, decrement } = useCounter(0)

  return (
    <div className="profile-page">
      <Header
        title="用户中心"
        subtitle="管理您的个人信息"
      />
      <Card title="用户信息">
        <p>用户名: 张三</p>
        <p>等级: VIP</p>
      </Card>
      <Card title="互动演示">
        <p>计数器: {count}</p>
        <div className="button-group">
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
        </div>
      </Card>
    </div>
  )
}

export default ProfileApp
