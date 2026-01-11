import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface ProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  username: string;
}

const ProfileModal = ({ open, onOpenChange, username }: ProfileModalProps) => {
  const playerData = {
    level: 32,
    experience: 75,
    money: 8500000,
    bank: 15000000,
    faction: 'Правительство',
    hours: 856,
    warns: 0,
    kills: 1243,
    deaths: 456,
  };

  const achievements = [
    { name: 'Первые шаги', desc: 'Достичь 10 уровня', completed: true },
    { name: 'Миллионер', desc: 'Заработать $1.000.000', completed: true },
    { name: 'Ветеран', desc: 'Провести 1000 часов', completed: false },
    { name: 'Легенда', desc: 'Достичь 50 уровня', completed: false },
  ];

  const transactions = [
    { type: 'income', desc: 'Зарплата от фракции', amount: 50000, date: '10.01.2026' },
    { type: 'outcome', desc: 'Покупка транспорта', amount: -250000, date: '09.01.2026' },
    { type: 'income', desc: 'Продажа бизнеса', amount: 1500000, date: '08.01.2026' },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center text-primary flex items-center justify-center gap-2">
            <Icon name="User" size={32} />
            {username}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card className="bg-background/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted-foreground">Уровень</span>
                <Badge className="bg-primary text-lg px-3 py-1">{playerData.level}</Badge>
              </div>
              <Progress value={playerData.experience} className="mb-2" />
              <p className="text-sm text-muted-foreground">
                Опыт: {playerData.experience}%
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Наличные</p>
                  <p className="text-2xl font-bold text-secondary">
                    ${playerData.money.toLocaleString()}
                  </p>
                </div>
                <Icon name="Wallet" className="text-secondary" size={32} />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="stats" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="stats">Статистика</TabsTrigger>
            <TabsTrigger value="achievements">Достижения</TabsTrigger>
            <TabsTrigger value="history">История</TabsTrigger>
          </TabsList>

          <TabsContent value="stats" className="space-y-4 mt-4">
            <Card className="bg-background/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" className="text-primary" size={20} />
                    <span>Фракция</span>
                  </div>
                  <span className="font-semibold">{playerData.faction}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" className="text-primary" size={20} />
                    <span>Часов в игре</span>
                  </div>
                  <span className="font-semibold">{playerData.hours}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Icon name="Building2" className="text-primary" size={20} />
                    <span>Банковский счет</span>
                  </div>
                  <span className="font-semibold text-secondary">
                    ${playerData.bank.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Icon name="AlertTriangle" className="text-destructive" size={20} />
                    <span>Предупреждений</span>
                  </div>
                  <span className="font-semibold">{playerData.warns}/3</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <Icon name="Crosshair" className="mx-auto mb-2 text-green-500" size={24} />
                    <p className="text-2xl font-bold">{playerData.kills}</p>
                    <p className="text-sm text-muted-foreground">Убийств</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Skull" className="mx-auto mb-2 text-red-500" size={24} />
                    <p className="text-2xl font-bold">{playerData.deaths}</p>
                    <p className="text-sm text-muted-foreground">Смертей</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4 mt-4">
            {achievements.map((ach, i) => (
              <Card key={i} className={`bg-background/50 ${ach.completed ? 'border-primary/50' : ''}`}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${ach.completed ? 'bg-primary/20' : 'bg-muted/20'}`}>
                    <Icon
                      name={ach.completed ? 'Trophy' : 'Lock'}
                      className={ach.completed ? 'text-primary' : 'text-muted-foreground'}
                      size={24}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{ach.name}</p>
                    <p className="text-sm text-muted-foreground">{ach.desc}</p>
                  </div>
                  {ach.completed && (
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="history" className="space-y-4 mt-4">
            {transactions.map((trans, i) => (
              <Card key={i} className="bg-background/50">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${trans.type === 'income' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                      <Icon
                        name={trans.type === 'income' ? 'ArrowDownLeft' : 'ArrowUpRight'}
                        className={trans.type === 'income' ? 'text-green-500' : 'text-red-500'}
                        size={20}
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{trans.desc}</p>
                      <p className="text-sm text-muted-foreground">{trans.date}</p>
                    </div>
                  </div>
                  <p className={`text-xl font-bold ${trans.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                    {trans.amount > 0 ? '+' : ''}${Math.abs(trans.amount).toLocaleString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
