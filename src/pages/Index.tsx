import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import AuthModal from '@/components/AuthModal';
import ProfileModal from '@/components/ProfileModal';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const handleLogin = (user: string) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  const serverStats = {
    online: 847,
    maxPlayers: 1000,
    uptime: '99.8%',
    version: 'SAMP 0.3.7',
  };

  const topPlayers = [
    { name: 'Vladimir_Petrov', level: 45, money: 15000000, hours: 1243 },
    { name: 'Dmitry_Ivanov', level: 42, money: 12500000, hours: 1150 },
    { name: 'Sergey_Kozlov', level: 40, money: 10800000, hours: 1089 },
  ];

  const features = [
    { icon: 'Users', title: 'Активное комьюнити', desc: '1000+ игроков онлайн' },
    { icon: 'Shield', title: 'Античит', desc: 'Защита от читеров' },
    { icon: 'Zap', title: 'Стабильность', desc: '99.8% аптайм' },
    { icon: 'Trophy', title: 'Уникальные системы', desc: 'Фракции, бизнес, работы' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Gamepad2" size={32} className="text-primary" />
            <h1 className="text-2xl md:text-3xl font-bold text-primary">PRP GAMES</h1>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#rating" className="hover:text-primary transition-colors">Рейтинг</a>
            <a href="#donate" className="hover:text-primary transition-colors">Донат</a>
            <a href="#rules" className="hover:text-primary transition-colors">Правила</a>
            {isLoggedIn ? (
              <Button 
                variant="outline" 
                className="game-glow"
                onClick={() => setProfileModalOpen(true)}
              >
                <Icon name="User" className="mr-2" size={18} />
                {username}
              </Button>
            ) : (
              <Button 
                className="game-glow bg-primary hover:bg-primary/80"
                onClick={() => setAuthModalOpen(true)}
              >
                Войти
              </Button>
            )}
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-primary">
              PRP GAMES
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Лучший CRMP сервер с уникальными системами, активным комьюнити и честной администрацией
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-lg px-4 py-2">
                <Icon name="Circle" className="mr-2 text-green-500" size={12} />
                {serverStats.online}/{serverStats.maxPlayers} онлайн
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                <Icon name="Server" className="mr-2" size={16} />
                {serverStats.version}
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                <Icon name="Activity" className="mr-2" size={16} />
                Аптайм {serverStats.uptime}
              </Badge>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="game-glow bg-primary hover:bg-primary/80 text-xl px-8 py-6">
                <Icon name="Play" className="mr-2" size={24} />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-8 py-6">
                <Icon name="Info" className="mr-2" size={24} />
                О сервере
              </Button>
            </div>
          </div>

          <Card className="max-w-2xl mx-auto game-glow bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-primary flex items-center justify-center gap-2">
                <Icon name="Server" size={24} />
                IP Адрес сервера
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-background rounded-lg p-6 text-center">
                <p className="text-3xl font-mono font-bold mb-2">95.142.47.105:7777</p>
                <Button variant="secondary" className="mt-4">
                  <Icon name="Copy" className="mr-2" size={18} />
                  Скопировать IP
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center text-primary">
            Особенности сервера
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-block p-4 bg-primary/10 rounded-lg">
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rating" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl font-bold mb-12 text-center text-primary">
            Рейтинг игроков
          </h3>
          <Tabs defaultValue="level" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="level">По уровню</TabsTrigger>
              <TabsTrigger value="money">По деньгам</TabsTrigger>
              <TabsTrigger value="hours">По часам</TabsTrigger>
            </TabsList>
            <TabsContent value="level">
              <div className="space-y-4">
                {topPlayers.map((player, i) => (
                  <Card key={i} className="bg-card/80 backdrop-blur hover:scale-102 transition-all">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-primary">#{i + 1}</div>
                        <div>
                          <p className="text-xl font-semibold">{player.name}</p>
                          <p className="text-sm text-muted-foreground">{player.hours} часов в игре</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-2xl font-bold text-secondary">${player.money.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">Баланс</p>
                        </div>
                        <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                          LVL {player.level}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="money">
              <div className="space-y-4">
                {topPlayers.sort((a, b) => b.money - a.money).map((player, i) => (
                  <Card key={i} className="bg-card/80 backdrop-blur">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Icon name="TrendingUp" className="text-secondary" size={32} />
                        <div>
                          <p className="text-xl font-semibold">{player.name}</p>
                          <p className="text-3xl font-bold text-secondary">${player.money.toLocaleString()}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="hours">
              <div className="space-y-4">
                {topPlayers.sort((a, b) => b.hours - a.hours).map((player, i) => (
                  <Card key={i} className="bg-card/80 backdrop-blur">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Icon name="Clock" className="text-primary" size={32} />
                        <div>
                          <p className="text-xl font-semibold">{player.name}</p>
                          <p className="text-2xl font-bold text-primary">{player.hours} часов</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="donate" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center text-primary">
            Поддержать проект
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'VIP', price: 299, benefits: ['Уникальный скин', '+50% к опыту', 'Доступ к VIP чату', 'Приоритет в очереди'] },
              { name: 'PREMIUM', price: 599, benefits: ['Все из VIP', '+100% к опыту', 'Личный транспорт', 'Уникальные команды', 'Золотой ник'] },
              { name: 'ULTIMATE', price: 999, benefits: ['Все из PREMIUM', 'Бессмертие 10 мин', 'Приват территория', 'Особые привилегии', 'Статус легенды'] },
            ].map((donate, i) => (
              <Card key={i} className={`${i === 1 ? 'gold-glow scale-105' : ''} bg-card/80 backdrop-blur hover:scale-105 transition-all`}>
                <CardHeader>
                  <CardTitle className="text-center text-3xl text-primary">{donate.name}</CardTitle>
                  <p className="text-center text-4xl font-bold text-secondary mt-4">{donate.price}₽</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {donate.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full game-glow bg-primary hover:bg-primary/80">
                    <Icon name="CreditCard" className="mr-2" size={18} />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-card/50">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="MessageCircle" size={24} className="text-primary hover:scale-110 transition-transform cursor-pointer" />
            <Icon name="Users" size={24} className="text-primary hover:scale-110 transition-transform cursor-pointer" />
            <Icon name="Youtube" size={24} className="text-primary hover:scale-110 transition-transform cursor-pointer" />
          </div>
          <p className="text-muted-foreground mb-2">© 2026 PRP GAMES. Все права защищены.</p>
          <p className="text-sm text-muted-foreground">Лучший CRMP сервер России</p>
        </div>
      </footer>

      <AuthModal 
        open={authModalOpen} 
        onOpenChange={setAuthModalOpen} 
        onLogin={handleLogin}
      />
      <ProfileModal 
        open={profileModalOpen} 
        onOpenChange={setProfileModalOpen} 
        username={username}
      />
    </div>
  );
};

export default Index;