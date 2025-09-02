import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  MoreVertical, 
  Send, 
  Paperclip, 
  Smile, 
  Phone, 
  Video,
  Info,
  Star,
  Circle,
  CheckCircle2
} from 'lucide-react';

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState('1');
  const [messageText, setMessageText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock conversations data
  const conversations = [
    {
      id: '1',
      participant: {
        name: 'TechCorp Ltd',
        avatar: '',
        type: 'company',
        online: true
      },
      project: 'Application E-commerce Mobile',
      lastMessage: {
        text: 'Parfait ! Quand pouvez-vous commencer le développement ?',
        timestamp: '2024-01-22T14:30:00Z',
        sender: 'company',
        read: true
      },
      unreadCount: 0,
      status: 'active'
    },
    {
      id: '2',
      participant: {
        name: 'Digital Solutions',
        avatar: '',
        type: 'company',
        online: false
      },
      project: 'Site Web Corporate',
      lastMessage: {
        text: 'Nous aimerions discuter des détails du projet avec vous',
        timestamp: '2024-01-22T10:15:00Z',
        sender: 'company',
        read: false
      },
      unreadCount: 2,
      status: 'pending'
    },
    {
      id: '3',
      participant: {
        name: 'LogiTech CM',
        avatar: '',
        type: 'company',
        online: true
      },
      project: 'API REST Inventory',
      lastMessage: {
        text: 'Merci pour votre proposition détaillée',
        timestamp: '2024-01-21T16:45:00Z',
        sender: 'freelancer',
        read: true
      },
      unreadCount: 0,
      status: 'completed'
    },
    {
      id: '4',
      participant: {
        name: 'EduTech Solutions',
        avatar: '',
        type: 'company',
        online: false
      },
      project: 'Gestion Scolaire',
      lastMessage: {
        text: 'Le projet avance bien, félicitations !',
        timestamp: '2024-01-21T09:20:00Z',
        sender: 'company',
        read: true
      },
      unreadCount: 0,
      status: 'in_progress'
    }
  ];

  // Mock messages for selected conversation
  const messages = [
    {
      id: '1',
      sender: 'company',
      text: 'Bonjour ! Nous avons examiné votre profil et nous sommes très intéressés par votre candidature pour notre projet d\'application e-commerce.',
      timestamp: '2024-01-22T09:00:00Z',
      read: true
    },
    {
      id: '2',
      sender: 'freelancer',
      text: 'Bonjour ! Merci pour votre intérêt. J\'ai étudié votre projet en détail et je pense pouvoir vous livrer une solution de qualité. Avez-vous des questions spécifiques sur mon approche ?',
      timestamp: '2024-01-22T09:15:00Z',
      read: true
    },
    {
      id: '3',
      sender: 'company',
      text: 'Excellente question ! Nous aimerions savoir comment vous comptez gérer l\'intégration des paiements mobile money, c\'est crucial pour notre marché camerounais.',
      timestamp: '2024-01-22T10:30:00Z',
      read: true
    },
    {
      id: '4',
      sender: 'freelancer',
      text: 'Parfaitement ! J\'ai déjà intégré Orange Money et MTN Mobile Money dans plusieurs projets. Je peux utiliser leurs APIs officielles pour garantir la sécurité et la fiabilité des transactions. Je peux vous montrer des exemples de mes précédentes intégrations.',
      timestamp: '2024-01-22T11:00:00Z',
      read: true
    },
    {
      id: '5',
      sender: 'company',
      text: 'C\'est exactement ce que nous recherchions ! Votre expérience avec les solutions de paiement locales est un vrai plus.',
      timestamp: '2024-01-22T14:00:00Z',
      read: true
    },
    {
      id: '6',
      sender: 'company',
      text: 'Parfait ! Quand pouvez-vous commencer le développement ?',
      timestamp: '2024-01-22T14:30:00Z',
      read: true
    }
  ];

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600';
      case 'pending': return 'text-yellow-600';
      case 'in_progress': return 'text-blue-600';
      case 'completed': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Actif';
      case 'pending': return 'En attente';
      case 'in_progress': return 'En cours';
      case 'completed': return 'Terminé';
      default: return status;
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      {/* Conversations List */}
      <div className="w-1/3 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher des conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedConversation === conversation.id ? 'bg-green-50 border-r-2 border-r-green-500' : ''
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {conversation.participant.name.charAt(0)}
                  </div>
                  {conversation.participant.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {conversation.participant.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-xs text-gray-500">
                        {formatTime(conversation.lastMessage.timestamp)}
                      </span>
                      {conversation.unreadCount > 0 && (
                        <div className="w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
                          {conversation.unreadCount}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-1 truncate">{conversation.project}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 truncate flex-1">
                      {conversation.lastMessage.sender === 'freelancer' ? 'Vous: ' : ''}
                      {conversation.lastMessage.text}
                    </p>
                    <div className="flex items-center space-x-1 ml-2">
                      <Circle className={`h-2 w-2 ${getStatusColor(conversation.status)} fill-current`} />
                      <span className={`text-xs ${getStatusColor(conversation.status)}`}>
                        {getStatusText(conversation.status)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedConv ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {selectedConv.participant.name.charAt(0)}
                    </div>
                    {selectedConv.participant.online && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{selectedConv.participant.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{selectedConv.project}</span>
                      <span>•</span>
                      <span className={getStatusColor(selectedConv.status)}>
                        {getStatusText(selectedConv.status)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Phone className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Video className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Info className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'freelancer' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'freelancer'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <div className={`flex items-center justify-end mt-1 space-x-1 ${
                      message.sender === 'freelancer' ? 'text-green-100' : 'text-gray-500'
                    }`}>
                      <span className="text-xs">{formatTime(message.timestamp)}</span>
                      {message.sender === 'freelancer' && (
                        <CheckCircle2 className="h-3 w-3" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <form onSubmit={handleSendMessage} className="flex items-end space-x-2">
                <div className="flex-1 relative">
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Tapez votre message..."
                    rows={1}
                    className="w-full px-4 py-2 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage(e);
                      }
                    }}
                  />
                  <div className="absolute right-2 bottom-2 flex items-center space-x-1">
                    <button
                      type="button"
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <Paperclip className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <Smile className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!messageText.trim()}
                  className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Sélectionnez une conversation</h3>
              <p className="text-gray-500">Choisissez une conversation pour commencer à discuter</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
