import { motion } from "framer-motion";
import { useState } from "react";
import {
  Copy,
  Check,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react";
import CodeBlock from "./CodeBlock";

function DocsContent({ activeSection }) {
  const [copiedCode, setCopiedCode] = useState("");

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const getContent = () => {
    switch (activeSection) {
      case "quick-start":
        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center bg-gradient-to-r from-[rgba(0,255,136,0.1)] to-[rgba(0,212,255,0.1)] border border-[rgba(0,255,136,0.2)] rounded-xl lg:rounded-2xl p-6 lg:p-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
                PROTECT YOUR APPLICATION IN{" "}
                <span className="text-[#00ff88]">60 SECONDS</span>
              </h1>
              <p className="text-base sm:text-lg text-[#a0a9c0] max-w-2xl mx-auto">
                Get enterprise-grade cybersecurity running in three simple
                steps. No complex configuration required.
              </p>
            </div>

            {/* Step 1: Install */}
            <motion.div
              className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-xl lg:rounded-2xl p-6 lg:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#00ff88] flex items-center justify-center font-bold text-white flex-shrink-0">
                  1
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    STEP 1: INSTALL
                  </h2>
                  <p className="text-[#00d4ff] text-sm sm:text-base">
                    ⏱️ Takes: ~30 seconds
                  </p>
                </div>
              </div>

              <CodeBlock
                language="bash"
                code={`# Python/FastAPI
pip install ids-protection

# Node.js/Express  
npm install @ids/middleware

# Django
pip install ids-django-middleware`}
                onCopy={(code) => handleCopyCode(code, "install")}
                copied={copiedCode === "install"}
              />
            </motion.div>

            {/* Step 2: Integrate */}
            <motion.div
              className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] flex items-center justify-center font-bold text-white">
                  2
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    STEP 2: INTEGRATE
                  </h2>
                  <p className="text-[#00d4ff]">⏱️ Takes: ~30 seconds</p>
                </div>
              </div>

              <CodeBlock
                language="python"
                code={`from ids_client import setup_ids_protection
from fastapi import FastAPI

app = FastAPI()

# One line of code for complete protection
setup_ids_protection(app, api_key="your_api_key_here")`}
                onCopy={(code) => handleCopyCode(code, "integrate")}
                copied={copiedCode === "integrate"}
              />

              <div className="mt-4 p-4 bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.2)] rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-[#00ff88] mt-0.5" />
                  <div>
                    <p className="text-white font-semibold mb-1">
                      Get Your API Key
                    </p>
                    <p className="text-[#a0a9c0] text-sm">
                      Sign up at{" "}
                      <a
                        href="/signup"
                        className="text-[#00d4ff] hover:underline"
                      >
                        cyberguard.com/signup
                      </a>{" "}
                      to get your free API key instantly.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3: Monitor */}
            <motion.div
              className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center font-bold text-white">
                  3
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    STEP 3: MONITOR
                  </h2>
                  <p className="text-[#00d4ff]">⏱️ Results: Immediate</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <p className="text-white font-semibold">Visit Dashboard</p>
                  <p className="text-[#a0a9c0] text-sm">
                    Live protection status
                  </p>
                </div>
                <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🛡️</div>
                  <p className="text-white font-semibold">Auto-Block Threats</p>
                  <p className="text-[#a0a9c0] text-sm">97.2% accuracy</p>
                </div>
                <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <p className="text-white font-semibold">
                    Real-time Analytics
                  </p>
                  <p className="text-[#a0a9c0] text-sm">Instant insights</p>
                </div>
              </div>
            </motion.div>

            {/* Success Banner */}
            <motion.div
              className="bg-gradient-to-r from-[rgba(0,255,136,0.1)] to-[rgba(0,212,255,0.1)] border border-[rgba(0,255,136,0.3)] rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-8 h-8 text-[#00ff88]" />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    🎉 Congratulations!
                  </h3>
                  <p className="text-[#a0a9c0]">
                    Your application is now protected by enterprise-grade AI
                    security. Check your dashboard to see threats being blocked
                    in real-time.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Next Steps */}
            <div className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                🚀 Next Steps
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <button className="text-left p-4 border border-[rgba(139,92,246,0.3)] rounded-lg hover:border-[#00ff88] transition-colors group">
                  <h4 className="font-semibold text-white group-hover:text-[#00ff88] mb-2">
                    Advanced Configuration →
                  </h4>
                  <p className="text-[#a0a9c0] text-sm">
                    Customize detection rules, set up webhooks, and configure
                    advanced features.
                  </p>
                </button>
                <button className="text-left p-4 border border-[rgba(139,92,246,0.3)] rounded-lg hover:border-[#00ff88] transition-colors group">
                  <h4 className="font-semibold text-white group-hover:text-[#00ff88] mb-2">
                    API Reference →
                  </h4>
                  <p className="text-[#a0a9c0] text-sm">
                    Explore our complete API documentation and integration
                    examples.
                  </p>
                </button>
              </div>
            </div>
          </div>
        );

      case "fastapi-middleware":
        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-[rgba(139,92,246,0.1)] to-[rgba(0,255,136,0.1)] border border-[rgba(139,92,246,0.3)] rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">🐍</div>
                <div>
                  <h1 className="text-4xl font-black text-white">
                    FASTAPI MIDDLEWARE INTEGRATION
                  </h1>
                  <div className="flex items-center space-x-6 mt-2">
                    <span className="text-[#00ff88]">
                      ⚡ Recommended for: New Python applications
                    </span>
                    <span className="text-[#00d4ff]">
                      🎯 Protection Level: Enterprise-grade
                    </span>
                    <span className="text-[#8b5cf6]">
                      ⏱️ Setup Time: 2 minutes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Basic Setup */}
            <div className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Basic Setup (Recommended)
              </h2>

              <CodeBlock
                language="python"
                code={`from fastapi import FastAPI
from ids_client import IDSMiddleware, IDSConfig

# Create FastAPI app
app = FastAPI()

# One-line protection setup
app.add_middleware(
    IDSMiddleware,
    api_key="ids_your_api_key_here",
    fallback_mode=True,
    timeout=5
)

@app.get("/")
async def protected_endpoint():
    return {"status": "protected", "security": "active"}`}
                onCopy={(code) => handleCopyCode(code, "fastapi-basic")}
                copied={copiedCode === "fastapi-basic"}
              />

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.2)] rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-[#00ff88] mb-2" />
                  <h4 className="font-semibold text-white mb-1">
                    Automatic Protection
                  </h4>
                  <p className="text-[#a0a9c0] text-sm">
                    All endpoints protected instantly
                  </p>
                </div>
                <div className="bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-[#00d4ff] mb-2" />
                  <h4 className="font-semibold text-white mb-1">
                    Fallback Mode
                  </h4>
                  <p className="text-[#a0a9c0] text-sm">
                    Works offline if IDS service unavailable
                  </p>
                </div>
                <div className="bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)] rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-[#8b5cf6] mb-2" />
                  <h4 className="font-semibold text-white mb-1">5s Timeout</h4>
                  <p className="text-[#a0a9c0] text-sm">
                    Fast response, no blocking
                  </p>
                </div>
              </div>
            </div>

            {/* Advanced Configuration */}
            <div className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Advanced Configuration
              </h2>

              <CodeBlock
                language="python"
                code={`from fastapi import FastAPI, WebSocket
from ids_client import IDSMiddleware, IDSConfig
import ids_client

app = FastAPI()

# Advanced configuration with custom rules
config = IDSConfig(
    api_key="ids_your_api_key_here",
    server_url="https://api.ids-service.com",
    websocket_url="wss://ws.ids-service.com",
    timeout=5,
    fallback_mode=True,
    rate_limit_window=60,
    rate_limit_max=100,
    custom_rules=[
        "block_tor_exit_nodes", 
        "geo_blocking",
        "advanced_sql_injection",
        "xss_protection"
    ],
    whitelist_ips=["192.168.1.0/24"],  # Office network
    blacklist_countries=["CN", "RU"],   # Block specific countries
    enable_logging=True,
    log_level="INFO"
)

app.add_middleware(IDSMiddleware, config=config)

@app.get("/")
async def protected_endpoint():
    return {"status": "protected", "security": "active"}

# Real-time threat monitoring WebSocket
@app.websocket("/ws/threats")  
async def threat_feed(websocket: WebSocket):
    await websocket.accept()
    
    # Stream live threat data to dashboard
    async for threat in ids_client.get_live_threats():
        await websocket.send_json({
            "timestamp": threat.timestamp,
            "threat_type": threat.type,
            "source_ip": threat.source_ip,
            "blocked": threat.blocked,
            "risk_score": threat.risk_score
        })

# Custom threat handler
@app.middleware("http")
async def threat_response_middleware(request, call_next):
    response = await call_next(request)
    
    # Add security headers
    response.headers["X-IDS-Protected"] = "true"
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    
    return response`}
                onCopy={(code) => handleCopyCode(code, "fastapi-advanced")}
                copied={copiedCode === "fastapi-advanced"}
              />
            </div>

            {/* Configuration Options Table */}
            <div className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Configuration Options
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[rgba(139,92,246,0.3)]">
                      <th className="text-left p-3 text-[#00ff88] font-semibold">
                        Parameter
                      </th>
                      <th className="text-left p-3 text-[#00ff88] font-semibold">
                        Type
                      </th>
                      <th className="text-left p-3 text-[#00ff88] font-semibold">
                        Default
                      </th>
                      <th className="text-left p-3 text-[#00ff88] font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[#a0a9c0]">
                    <tr className="border-b border-[rgba(139,92,246,0.1)]">
                      <td className="p-3 font-mono text-[#00d4ff]">api_key</td>
                      <td className="p-3">string</td>
                      <td className="p-3 font-mono">None</td>
                      <td className="p-3 text-white">
                        Your IDS API key (required)
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(139,92,246,0.1)]">
                      <td className="p-3 font-mono text-[#00d4ff]">timeout</td>
                      <td className="p-3">int</td>
                      <td className="p-3 font-mono">5</td>
                      <td className="p-3 text-white">
                        Request timeout in seconds
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(139,92,246,0.1)]">
                      <td className="p-3 font-mono text-[#00d4ff]">
                        fallback_mode
                      </td>
                      <td className="p-3">bool</td>
                      <td className="p-3 font-mono">True</td>
                      <td className="p-3 text-white">
                        Allow traffic when IDS unavailable
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(139,92,246,0.1)]">
                      <td className="p-3 font-mono text-[#00d4ff]">
                        custom_rules
                      </td>
                      <td className="p-3">list</td>
                      <td className="p-3 font-mono">[]</td>
                      <td className="p-3 text-white">
                        Additional security rules to enable
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "django":
        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="border-b border-[rgba(139,92,246,0.2)] pb-8">
              <h1 className="text-4xl font-bold text-white mb-4 flex items-center">
                🐍 Django Integration
              </h1>
              <p className="text-[#a0a9c0] text-xl leading-relaxed">
                Secure your Django applications with intelligent threat
                detection and real-time monitoring. Our middleware seamlessly
                integrates with Django's security framework.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <span className="px-4 py-2 bg-[rgba(0,255,136,0.2)] text-[#00ff88] rounded-full text-sm font-semibold">
                  Django 3.2+
                </span>
                <span className="px-4 py-2 bg-[rgba(0,212,255,0.2)] text-[#00d4ff] rounded-full text-sm font-semibold">
                  Python 3.8+
                </span>
                <span className="px-4 py-2 bg-[rgba(139,92,246,0.2)] text-[#8b5cf6] rounded-full text-sm font-semibold">
                  Middleware
                </span>
              </div>
            </div>

            {/* Prerequisites */}
            <div id="prerequisites" className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-[#00ff88]" />
                Prerequisites
              </h2>
              <div className="bg-[rgba(21,21,32,0.8)] border border-[rgba(0,212,255,0.3)] rounded-xl p-6">
                <ul className="space-y-3 text-[#a0a9c0]">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#00d4ff] rounded-full mr-3"></span>
                    Django 3.2 or higher installed
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#00d4ff] rounded-full mr-3"></span>
                    Python 3.8+ environment
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#00d4ff] rounded-full mr-3"></span>
                    Active IDS subscription and API key
                  </li>
                </ul>
              </div>
            </div>

            {/* Installation */}
            <div id="installation" className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <ExternalLink className="w-6 h-6 mr-3 text-[#00d4ff]" />
                Installation
              </h2>

              <div className="space-y-4">
                <p className="text-[#a0a9c0]">
                  Install the IDS Django middleware package using pip:
                </p>

                <CodeBlock
                  language="bash"
                  code={`# Install the IDS Django middleware
pip install ids-django-middleware

# Or add to requirements.txt
echo "ids-django-middleware>=1.0.0" >> requirements.txt
pip install -r requirements.txt`}
                  onCopy={handleCopyCode}
                  copied={copiedCode === "django-install"}
                />
              </div>
            </div>

            {/* Django Settings Configuration */}
            <div id="settings" className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Settings className="w-6 h-6 mr-3 text-[#8b5cf6]" />
                Settings Configuration
              </h2>

              <div className="space-y-4">
                <p className="text-[#a0a9c0]">
                  Add the IDS middleware to your Django settings.py file:
                </p>

                <CodeBlock
                  language="python"
                  code={`# settings.py

# Add IDS middleware to MIDDLEWARE (order matters!)
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'ids_middleware.django.IDSMiddleware',  # Add this early in the stack
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# IDS Configuration
IDS_CONFIG = {
    'api_key': 'your-api-key-here',  # Replace with your actual API key
    'endpoint': 'https://api.ids-system.com/v1',
    'enabled': True,
    'debug': DEBUG,  # Use Django's DEBUG setting
    
    # Security settings
    'block_threats': True,
    'log_all_requests': True,
    'whitelist_paths': [
        '/health/',
        '/metrics/',
        '/admin/login/',  # Allow admin login
    ],
    
    # Rate limiting
    'rate_limit': {
        'enabled': True,
        'requests_per_minute': 100,
        'burst_limit': 20,
    },
    
    # Custom detection rules
    'detection_rules': {
        'sql_injection': True,
        'xss_protection': True,
        'command_injection': True,
        'file_inclusion': True,
        'csrf_protection': True,
    }
}`}
                  onCopy={handleCopyCode}
                  copied={copiedCode === "django-settings"}
                />
              </div>
            </div>

            {/* URL Patterns */}
            <div id="urls" className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Code className="w-6 h-6 mr-3 text-[#00ff88]" />
                URL Patterns & View Protection
              </h2>

              <div className="space-y-4">
                <p className="text-[#a0a9c0]">
                  Configure URL patterns with IDS protection in your urls.py:
                </p>

                <CodeBlock
                  language="python"
                  code={`# urls.py
from django.contrib import admin
from django.urls import path, include
from ids_middleware.django import ids_protect_view
from . import views

# Apply IDS protection to specific views
@ids_protect_view(
    custom_rules=['advanced_sql_detection', 'api_abuse_protection'],
    rate_limit={'requests_per_minute': 50}
)
def protected_api_view(request):
    return JsonResponse({'data': 'sensitive information'})

# URL patterns
urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Protected API endpoints
    path('api/', include([
        path('data/', protected_api_view, name='protected_data'),
        path('user/', views.UserView.as_view(), name='user_data'),
    ])),
    
    # Public endpoints (will still be monitored)
    path('', views.HomeView.as_view(), name='home'),
    path('about/', views.AboutView.as_view(), name='about'),
]`}
                  onCopy={handleCopyCode}
                  copied={copiedCode === "django-urls"}
                />
              </div>
            </div>

            {/* Class-Based View Protection */}
            <div id="views" className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Shield className="w-6 h-6 mr-3 text-[#8b5cf6]" />
                Class-Based View Protection
              </h2>

              <div className="space-y-4">
                <p className="text-[#a0a9c0]">
                  Use decorators and mixins to protect your Django class-based
                  views:
                </p>

                <CodeBlock
                  language="python"
                  code={`# views.py
from django.views.generic import ListView, DetailView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from ids_middleware.django import IDSProtectionMixin, ids_protect_view
from .models import SensitiveData

# Using IDS Protection Mixin
class ProtectedListView(IDSProtectionMixin, ListView):
    model = SensitiveData
    template_name = 'data_list.html'
    
    # Configure IDS protection for this view
    ids_config = {
        'detection_rules': ['advanced_xss', 'data_exfiltration'],
        'rate_limit': {'requests_per_minute': 30},
        'block_suspicious_ips': True,
    }

# Using method decorator
@method_decorator(ids_protect_view(
    custom_rules=['api_abuse_protection'],
    log_level='WARNING'
), name='dispatch')
class APIView(DetailView):
    model = SensitiveData
    
    def get(self, request, *args, **kwargs):
        data = self.get_object()
        return JsonResponse({
            'id': data.id,
            'name': data.name,
            'status': 'active'
        })

# Function-based view with advanced protection
@ids_protect_view(
    whitelist_ips=['192.168.1.0/24'],  # Allow internal network
    block_tor_exit_nodes=True,
    custom_detection={
        'pattern': r'(?i)(union|select|drop|insert|update|delete)',
        'action': 'block',
        'message': 'SQL injection attempt detected'
    }
)
def sensitive_operation(request):
    if request.method == 'POST':
        # Process sensitive data
        return JsonResponse({'status': 'success'})
    return JsonResponse({'error': 'Method not allowed'}, status=405)`}
                  onCopy={handleCopyCode}
                  copied={copiedCode === "django-views"}
                />
              </div>
            </div>

            {/* Template Integration */}
            <div id="templates" className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Code className="w-6 h-6 mr-3 text-[#00d4ff]" />
                Template Integration
              </h2>

              <div className="space-y-4">
                <p className="text-[#a0a9c0]">
                  Add IDS security information to your Django templates:
                </p>

                <CodeBlock
                  language="html"
                  code={`<!-- base.html -->
{% load ids_tags %}

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{% block title %}My Secure App{% endblock %}</title>
    
    <!-- IDS Security Headers -->
    {% ids_security_headers %}
    
    <!-- Content Security Policy -->
    {% ids_csp_header %}
</head>
<body>
    <!-- Security status indicator (optional) -->
    {% if request.user.is_staff %}
        <div class="security-status">
            {% ids_security_status %}
        </div>
    {% endif %}
    
    <main>
        {% block content %}{% endblock %}
    </main>
    
    <!-- IDS monitoring script -->
    {% ids_client_script %}
</body>
</html>

<!-- data_list.html -->
{% extends 'base.html' %}
{% load ids_tags %}

{% block content %}
<div class="container">
    <h1>Sensitive Data</h1>
    
    <!-- Check if current request is secure -->
    {% if request|ids_is_secure %}
        <div class="alert alert-success">
            🛡️ This request is verified as secure
        </div>
    {% endif %}
    
    <table>
        {% for item in object_list %}
            <tr>
                <td>{{ item.name }}</td>
                <td>
                    <!-- Apply runtime security check -->
                    {% ids_secure_content item.sensitive_field %}
                </td>
            </tr>
        {% endfor %}
    </table>
</div>
{% endblock %}`}
                  onCopy={handleCopyCode}
                  copied={copiedCode === "django-templates"}
                />
              </div>
            </div>

            {/* Testing & Deployment */}
            <div id="testing" className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-[#00ff88]" />
                Testing & Deployment
              </h2>

              <div className="bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.3)] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-[#00ff88]" />
                  Testing Configuration
                </h3>

                <CodeBlock
                  language="python"
                  code={`# test_settings.py
from .settings import *

# Disable IDS in tests to avoid interference
IDS_CONFIG['enabled'] = False

# Or use test-specific configuration
IDS_CONFIG.update({
    'enabled': True,
    'debug': True,
    'block_threats': False,  # Don't block in tests
    'log_all_requests': False,  # Reduce noise in test logs
})

# test_views.py
from django.test import TestCase, Client
from django.urls import reverse
from ids_middleware.django.testing import IDSTestMixin

class SecurityTestCase(IDSTestMixin, TestCase):
    def setUp(self):
        self.client = Client()
        # Enable IDS for this test
        self.enable_ids_protection()
    
    def test_sql_injection_detection(self):
        # This should be blocked by IDS
        malicious_data = {
            'name': "'; DROP TABLE users; --"
        }
        
        response = self.client.post('/api/data/', malicious_data)
        
        # Verify IDS blocked the request
        self.assertIDSBlocked(response)
        self.assertEqual(response.status_code, 403)
    
    def test_legitimate_request(self):
        # This should pass through IDS
        clean_data = {
            'name': 'John Doe'
        }
        
        response = self.client.post('/api/data/', clean_data)
        
        # Verify IDS allowed the request
        self.assertIDSAllowed(response)
        self.assertEqual(response.status_code, 200)`}
                  onCopy={handleCopyCode}
                  copied={copiedCode === "django-testing"}
                />
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-white mb-4">
                {activeSection
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}{" "}
                Documentation
              </h1>
              <p className="text-[#a0a9c0] text-lg">
                Content for this section is coming soon. Check back later for
                detailed implementation guides.
              </p>
              <div className="mt-8 p-6 bg-[rgba(21,21,32,0.8)] border border-[rgba(139,92,246,0.3)] rounded-xl inline-block">
                <AlertTriangle className="w-12 h-12 text-[#00d4ff] mx-auto mb-4" />
                <p className="text-white font-semibold mb-2">
                  Under Development
                </p>
                <p className="text-[#a0a9c0] text-sm">
                  This documentation section is being actively developed.
                  Contact support for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 w-full max-w-4xl mx-auto">
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {getContent()}
      </motion.div>
    </div>
  );
}

export default DocsContent;
