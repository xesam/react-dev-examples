import { Header, Card } from '@shared/components'
import { useQueryParam } from '@shared/hooks'
import { formatDate } from '@shared/utils'
import './style.css'

function ActivityApp() {
  const activityId = useQueryParam('id')

  return (
    <div className="activity-page">
      <Header
        title="活动详情"
        subtitle="限时优惠活动页面"
      />
      <Card title="活动信息">
        <p>活动 ID: {activityId || '未指定'}</p>
        <p>当前时间: {formatDate(new Date())}</p>
      </Card>
      <Card title="活动内容">
        <p>这是一个独立的活动入口页面，通过 activity.html 访问。</p>
        <p>示例 URL: /activity.html?id=123</p>
      </Card>
    </div>
  )
}

export default ActivityApp
