import { supabase } from '../config/supabase'

interface UserData {
  name: string
  email: string
  password: string
  user_type: 'anunciante' | 'influenciador'
  // Influencer specific fields
  category?: string
  niches?: string[]
  followers?: number
  // Advertiser specific fields
  company_name?: string
  segment?: string
  website?: string
  phone?: string
}

interface CampaignData {
  title: string
  description: string
  status: 'active' | 'inactive' | 'completed'
  budget: number
  advertiser_id: string
}

class DatabaseService {
  async testConnection() {
    try {
      console.log('Testando conexão com Supabase...')
      
      // Tenta buscar um registro da tabela users para testar a conexão
      const { data: users, error: usersError } = await supabase
        .from('users')
        .select('*')
        .limit(1)

      if (usersError) {
        console.error('Erro ao buscar usuários:', usersError)
        throw new Error(`Erro na conexão com a tabela users: ${usersError.message}`)
      }

      // Se chegou aqui, a conexão está funcionando
      const { data: campaigns, error: campaignsError } = await supabase
        .from('campaigns')
        .select('*')

      const { data: enrollments, error: enrollmentsError } = await supabase
        .from('campaign_enrollments')
        .select('*')

      if (campaignsError) {
        console.error('Erro ao buscar campanhas:', campaignsError)
      }

      if (enrollmentsError) {
        console.error('Erro ao buscar inscrições:', enrollmentsError)
      }

      return {
        message: 'Conexão estabelecida com sucesso!',
        users: users || [],
        campaigns: campaigns || [],
        enrollments: enrollments || []
      }
    } catch (error) {
      console.error('Erro no teste de conexão:', error)
      throw error
    }
  }

  async testInsert() {
    try {
      console.log('Iniciando inserção de dados de teste...')

      // Inserir usuário anunciante de teste
      const { data: advertiser, error: advertiserError } = await supabase
        .from('users')
        .insert([
          {
            name: 'Anunciante Teste',
            email: `anunciante${Date.now()}@example.com`,
            created_at: new Date().toISOString(),
            user_type: 'anunciante'
          }
        ])
        .select()

      if (advertiserError) {
        console.error('Erro ao inserir anunciante:', advertiserError)
        throw new Error(`Erro ao inserir anunciante: ${advertiserError.message}`)
      }

      // Inserir usuário influenciador de teste
      const { data: influencer, error: influencerError } = await supabase
        .from('users')
        .insert([
          {
            name: 'Influenciador Teste',
            email: `influencer${Date.now()}@example.com`,
            created_at: new Date().toISOString(),
            user_type: 'influenciador'
          }
        ])
        .select()

      if (influencerError) {
        console.error('Erro ao inserir influenciador:', influencerError)
        throw new Error(`Erro ao inserir influenciador: ${influencerError.message}`)
      }

      // Inserir campanha de teste
      const { data: campaign, error: campaignError } = await supabase
        .from('campaigns')
        .insert([
          {
            title: 'Campanha Teste',
            description: 'Descrição da campanha de teste',
            created_at: new Date().toISOString(),
            status: 'active',
            budget: 1000.00,
            advertiser_id: advertiser?.[0]?.id
          }
        ])
        .select()

      if (campaignError) {
        console.error('Erro ao inserir campanha:', campaignError)
        throw new Error(`Erro ao inserir campanha: ${campaignError.message}`)
      }

      // Inserir inscrição de teste
      const { data: enrollment, error: enrollmentError } = await supabase
        .from('campaign_enrollments')
        .insert([
          {
            influencer_id: influencer?.[0]?.id,
            campaign_id: campaign?.[0]?.id,
            created_at: new Date().toISOString(),
            status: 'pending'
          }
        ])
        .select()

      if (enrollmentError) {
        console.error('Erro ao inserir inscrição:', enrollmentError)
        throw new Error(`Erro ao inserir inscrição: ${enrollmentError.message}`)
      }

      return {
        message: 'Dados de teste inseridos com sucesso!',
        advertiser,
        influencer,
        campaign,
        enrollment
      }
    } catch (error) {
      console.error('Erro na inserção de dados de teste:', error)
      throw error
    }
  }

  // Cadastro de usuário (anunciante ou influenciador)
  async createUser(userData: UserData) {
    try {
      // Garantir que o campo created_at seja incluído
      const userDataWithTimestamp = {
        ...userData,
        created_at: new Date().toISOString()
      };

      const { data, error } = await supabase
        .from('users')
        .insert([userDataWithTimestamp])
        .select()
        .single();

      if (error) {
        console.error('Erro detalhado do Supabase:', error);
        throw new Error(`Erro ao criar usuário: ${error.message}`);
      }

      return data;
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
    }
  }

  // Login de usuário
  async loginUser(email: string, password: string) {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single()

      if (error) {
        console.error('Erro ao buscar usuário:', error)
        throw new Error('Usuário não encontrado')
      }

      if (!data) {
        throw new Error('Usuário não encontrado')
      }

      // Verificar se a senha corresponde
      if (data.password !== password) {
        throw new Error('Senha incorreta')
      }

      return data
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      throw error
    }
  }

  // Criar campanha
  async createCampaign(campaignData: CampaignData) {
    try {
      const { data, error } = await supabase
        .from('campaigns')
        .insert([{
          ...campaignData,
          created_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Erro ao criar campanha:', error)
      throw error
    }
  }

  // Inscrever influenciador em uma campanha
  async enrollInCampaign(campaignId: string, influencerId: string) {
    try {
      const { data, error } = await supabase
        .from('campaign_enrollments')
        .insert([{
          campaign_id: campaignId,
          influencer_id: influencerId,
          status: 'pending',
          created_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Erro ao inscrever em campanha:', error)
      throw error
    }
  }

  // Buscar campanhas
  async getCampaigns(filters?: { status?: string; advertiserId?: string }) {
    try {
      let query = supabase
        .from('campaigns')
        .select('*, users!campaigns_advertiser_id_fkey(*)')

      if (filters?.status) {
        query = query.eq('status', filters.status)
      }

      if (filters?.advertiserId) {
        query = query.eq('advertiser_id', filters.advertiserId)
      }

      const { data, error } = await query

      if (error) throw error
      return data
    } catch (error) {
      console.error('Erro ao buscar campanhas:', error)
      throw error
    }
  }

  // Buscar inscrições de um influenciador
  async getInfluencerEnrollments(influencerId: string) {
    try {
      const { data, error } = await supabase
        .from('campaign_enrollments')
        .select('*, campaigns(*)')
        .eq('influencer_id', influencerId)

      if (error) throw error
      return data
    } catch (error) {
      console.error('Erro ao buscar inscrições:', error)
      throw error
    }
  }

  // Buscar inscrições de uma campanha
  async getCampaignEnrollments(campaignId: string) {
    try {
      const { data, error } = await supabase
        .from('campaign_enrollments')
        .select('*, users!campaign_enrollments_influencer_id_fkey(*)')
        .eq('campaign_id', campaignId)

      if (error) throw error
      return data
    } catch (error) {
      console.error('Erro ao buscar inscrições da campanha:', error)
      throw error
    }
  }

  async insertTestData() {
    try {
      // Inserir usuário anunciante
      const anunciante = await this.createUser({
        name: 'Anunciante Teste',
        email: 'anunciante@teste.com',
        user_type: 'anunciante',
      });

      // Inserir usuário influenciador
      const influenciador = await this.createUser({
        name: 'Influenciador Teste',
        email: 'influenciador@teste.com',
        user_type: 'influenciador',
      });

      // Inserir campanha
      const campanha = await this.createCampaign({
        title: 'Campanha Teste',
        description: 'Descrição da campanha teste',
        budget: 1000,
        status: 'active',
        advertiser_id: anunciante.id.toString()
      });

      // Inserir inscrição
      const inscricao = await this.enrollInCampaign(campanha.id.toString(), influenciador.id.toString());

      return {
        anunciante,
        influenciador,
        campanha,
        inscricao
      };
    } catch (error) {
      console.error('Erro ao inserir dados de teste:', error);
      throw error;
    }
  }
}

export const databaseService = new DatabaseService() 